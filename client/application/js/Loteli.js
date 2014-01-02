function Loteli(container)
{
	var self = {};

	self.init = function(container)
	{
		//////
		// Initialisation des membres
		//////
		self.m_container = container;
	
		//////
		// Creation de la structure de la page
		//////
		self.m_header	= CreateElement("div", {"id":"header",	"parent":self.m_container});
		self.m_content	= CreateElement("div", {"id":"content",	"parent":self.m_container});

			//////
			// Creation des widgets
			//////
			self.m_planning			= new Planning(self.m_content);
			self.m_booking			= new Booking(self.m_content);
			self.m_clientsList		= new ClientsList(self.m_content);
			self.m_bills			= new Bills(self.m_content);
			self.m_mailBox			= new MailBox(self.m_content);

			//////
			// Creation du menu principal
			//////
			self.m_mainMenu						= CreateElement("ul",	{"parent":self.m_header});
			self.m_mainMenuPlanningItem			= CreateElement("li",	{"parent":self.m_mainMenu});
			self.m_mainMenuPlanningAction		= CreateElement("a",	{"parent":self.m_mainMenuPlanningItem,		"content":"Planning",		"click":self.m_planning.show});
			self.m_mainMenuBookingItem			= CreateElement("li",	{"parent":self.m_mainMenu});
			self.m_mainMenuBookingAction		= CreateElement("a",	{"parent":self.m_mainMenuBookingItem,		"content":"Reservation",	"click":self.m_booking.show});
			self.m_mainMenuClientsItem			= CreateElement("li",	{"parent":self.m_mainMenu});
			self.m_mainMenuClientsMenuAction	= CreateElement("a",	{"parent":self.m_mainMenuClientsItem,		"content":"Clients"});
			self.m_mainMenuClientsMenu			= CreateElement("ul",	{"parent":self.m_mainMenuClientsItem});
			self.m_mainMenuClientsListItem		= CreateElement("li",	{"parent":self.m_mainMenuClientsMenu});
			self.m_mainMenuClientsListAction	= CreateElement("a",	{"parent":self.m_mainMenuClientsListItem,	"content":"Liste",			"click":self.m_clientsList.show});
			self.m_mainMenuClientsNewItem		= CreateElement("li",	{"parent":self.m_mainMenuClientsMenu});
			self.m_mainMenuClientsNewAction		= CreateElement("a",	{"parent":self.m_mainMenuClientsListItem,	"content":"Nouveau",		"click":self.newClient});
			self.m_mainMenuBillsItem			= CreateElement("li",	{"parent":self.m_mainMenu});
			self.m_mainMenuBillsAction			= CreateElement("a",	{"parent":self.m_mainMenuBillsItem,			"content":"Factures",		"click":self.m_bills.show});
			self.m_mainMenuMailBoxItem			= CreateElement("li",	{"parent":self.m_mainMenu});
			self.m_mainMenuMailBoxAction		= CreateElement("a",	{"parent":self.m_mainMenuMailBoxItem,		"content":"Boite mail",		"click":self.m_mailBox.show});

			self.m_mainMenu.jMenu({
				openClick : false,
				ulWidth : 'auto',
				effects : {
					effectSpeedOpen : 50,
					effectSpeedClose : 50,
					effectTypeOpen : 'slide',
					effectTypeClose : 'slide',
					effectOpen : 'linear',
					effectClose : 'linear'
				},
				TimeBeforeOpening : 50,
				TimeBeforeClosing : 11,
				animatedText : false,
				paddingLeft: 1
			});
 

		//////
		// Etat initial
		//////
		self.m_clientsList.show();
		self.newClient();
		
		return self;
	}
	
	self.newClient = function()
	{
		var clientsEditForm	= new ClientsEditForm();
		var newClientDialog = new $.Zebra_Dialog("", {	title:					"Nouveau client...",
														type:					false,
														keyboard:				false,
														overlay_close:			false,
														show_close_button:		false,
														width:					700,
														animation_speed_hide:	0,
														animation_speed_show:	0,
														buttons:  				[
																					{caption: 'Ok',			callback: function() {return self.createClient(clientsEditForm)}},
																					{caption: 'Annuler'}
																				],
														source:					{'inline': clientsEditForm.form()}});
	}
	
	self.createClient = function(clientEditForm)
	{
		var newClientStatusDialog = new $.Zebra_Dialog('<strong>Zebra_Dialog</strong>, a small, compact and highly configurable dialog box plugin for jQuery', {type: 'error', title: 'Error'});
		return true;
	}
	
	return self.init(container);
}