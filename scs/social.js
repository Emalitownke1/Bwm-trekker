
const { adams } = require("../Ibrahim/adams");
const { getBalance, getServices, addOrder, getOrderStatus } = require("../Ibrahim/api/yoyomedia");

adams({
  nomCom: "smcmds",
  categorie: "Social",
  reaction: "📱"
}, async (dest, zk, commandeOptions) => {
  const { repondre } = commandeOptions;
  
  const smCommands = `
╔═══════════════════════╗
    *SOCIAL MEDIA API COMMANDS*
╚═══════════════════════╝

┌────────────────
│ *📊 AVAILABLE COMMANDS*
│ .smbalance : Check account balance (USD)
│ .smservices : List all services
│ .smorder : Place new order
│ .smstatus : Check order status
└────────────────

*Command Usage:*

1️⃣ *.smbalance*
   • Shows your current balance in USD
   
2️⃣ *.smservices*
   • Lists available services with:
   • Service name & ID
   • Min/Max quantity
   • Price rate
   • Category
   
3️⃣ *.smorder <service_id> <link> <quantity>*
   • service_id: Service ID number
   • link: Target page URL
   • quantity: Amount to order
   
4️⃣ *.smstatus <order_id>*
   • Shows order progress
   • Start count
   • Remaining amount
   • Order status

5️⃣ *.freelikes <instagram_post_url>*
   • Claim free Instagram likes
   • One-time use per user
   • Valid Instagram post URL required
   • 15 free likes per claim
   
Note: Admin access required for all commands.`;

  repondre(smCommands);
});

adams({
  nomCom: "smbalance",
  categorie: "Social",
  reaction: "💰"
}, async (dest, zk, commandeOptions) => {
  const { repondre, superUser } = commandeOptions;
  
  if (!superUser) {
    repondre('This command is only for the bot owner');
    return;
  }

  try {
    const balance = await getBalance();
    repondre(`Balance: ${balance.balance} ${balance.currency}`);
  } catch (error) {
    repondre("Error checking balance: " + error.message);
  }
});

adams({
  nomCom: "smservices", 
  categorie: "Social",
  reaction: "📋"
}, async (dest, zk, commandeOptions) => {
  const { repondre } = commandeOptions;

  try {
    const services = await getServices();
    let message = "📋 *AVAILABLE SERVICES*\n\n";
    
    if (Array.isArray(services)) {
      for (const service of services) {
        message += `╔════════════════════\n`;
        message += `║ 🔸 *${service.name || 'Unknown'}*\n`;
        message += `║ 📌 Service ID: ${service.service || 'N/A'}\n`;
        message += `║ 💰 Rate: $${service.rate || '0'}\n`;
        message += `║ ⬇️ Min Order: ${service.min || '0'}\n`;
        message += `║ ⬆️ Max Order: ${service.max || '0'}\n`;
        message += `║ 📝 Category: ${service.category || 'N/A'}\n`;
        message += `╚════════════════════\n\n`;
      }
    } else {
      message += "❌ No services available at the moment.";
    }
    
    repondre(message);
  } catch (error) {
    console.error('Services Error:', error);
    repondre("❌ Error fetching services. Please try again later.");
  }
});

adams({
  nomCom: "smorder",
  categorie: "Social", 
  reaction: "🛒"
}, async (dest, zk, commandeOptions) => {
  const { repondre, arg, superUser } = commandeOptions;

  if (!superUser) {
    repondre('This command is only for the bot owner');
    return;
  }

  if (arg.length < 3) {
    return repondre("Usage: .smorder <service_id> <link> <quantity>");
  }
  
  try {
    const [serviceId, link, quantity] = arg;
    const order = await addOrder(serviceId, link, parseInt(quantity));
    repondre(`Order placed successfully! Order ID: ${order.order}`);
  } catch (error) {
    repondre("Error placing order: " + error.message);
  }
});

adams({
  nomCom: "smstatus",
  categorie: "Social",
  reaction: "📊"
}, async (dest, zk, commandeOptions) => {
  const { repondre, arg, superUser } = commandeOptions;

  if (!superUser) {
    repondre('This command is only for the bot owner');
    return;
  }

  if (!arg[0]) {
    return repondre("Please provide an order ID");
  }

  try {
    const status = await getOrderStatus(arg[0]);
    let message = "*Order Status*\n\n";
    message += `Status: ${status.status}\n`;
    message += `Charge: ${status.charge} ${status.currency}\n`;
    message += `Start Count: ${status.start_count}\n`;
    message += `Remains: ${status.remains}`;
    repondre(message);
  } catch (error) {
    repondre("Error checking status: " + error.message);
  }
});
