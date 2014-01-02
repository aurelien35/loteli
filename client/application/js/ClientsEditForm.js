function ClientsEditForm()
{
	var self = {};

	self.init = function()
	{
		//////
		// Initialisation des membres
		//////
		self.m_form				= CreateForm();
		self.m_nameInput		= CreateElement("input",	{"type":"text", "size":"50"});
		self.m_firstNameInput	= CreateElement("input",	{"type":"text", "size":"50"});
		self.m_birthDateInput	= CreateElement("input",	{"type":"text", "size":"50"});
		self.m_countryInput		= CreateElement("input",	{"type":"text", "size":"50"});
		self.m_phoneInput		= CreateElement("input",	{"type":"text", "size":"50"});
		self.m_addPhoneButton	= CreateElement("span",		{"class":"ui-icon ui-icon-plus"});
		self.m_emailInput		= CreateElement("input",	{"type":"text", "size":"50"});
		self.m_addEmailButton	= CreateElement("span",		{"class":"ui-icon ui-icon-plus"});
		self.m_addressInput		= CreateElement("textarea",	{"cols":"50", "rows":"10", "class":"noResize"});
		self.m_commentInput		= CreateElement("textarea",	{"cols":"50", "rows":"5", "class":"noResize"});

		self.m_addPhoneButton.button();
		self.m_addEmailButton.button();
		self.m_birthDateInput.datepicker({	autoSize:			true,
											dateFormat:			"dd/mm/yy",
											dayNames:			["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
											dayNamesMin:		["Di", "Lu", "Ma", "Me", "Je", "Ve", "Sa"],
											dayNamesShort:		["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
											firstDay:			1,
											monthNames:			["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
											monthNamesShort:	["Jan", "Fév", "Mar", "Avr", "Mai", "Juin", "Juil", "Août", "Sep", "Oct", "Nov", "Déc"],
											nextText:			"Suivant",
											prevText:			"Précédent"
										});
		
		CreateFormRow("Nom :",					self.m_nameInput,		null,					self.m_form);
		CreateFormRow("Prénom :",				self.m_firstNameInput,	null,					self.m_form);
		CreateFormRow("Date de naissance :",	self.m_birthDateInput,	null,					self.m_form);
		CreateFormRow("Nationalité :",			self.m_countryInput,	null,					self.m_form);
		CreateFormRow("Téléphone :",			self.m_phoneInput,		self.m_addPhoneButton,	self.m_form);
		CreateFormRow("Email :",				self.m_emailInput,		self.m_addEmailButton,	self.m_form);
		CreateFormRow("Addresse :",				self.m_addressInput,	null,					self.m_form);
		CreateFormRow("Commentaire :",			self.m_commentInput,	null,					self.m_form);
		
		return self;
	}
		
	self.form = function()
	{
		return self.m_form;
	}
	
	return self.init();
}
