function ClientsList(container)
{
	var self = {};

	self.init = function(container)
	{
		//////
		// Initialisation des membres
		//////
		self.m_container = container;
		
		return self;
	}
		
	self.show = function()
	{
		self.m_container.empty();

		self.m_dataTable = CreateDataTable({"parent":self.m_container}, {"aoColumns":[{"sTitle": "Nom"}, {"sTitle": "Prenom"}]});
		
		CreateElement("div", {"parent":self.m_container, "content":"Planning<br/>Planning<br/>Planning<br/>Planning<br/>Planning<br/>Planning<br/><br/><br/>http://www.myjqueryplugins.com/jquery-plugin/jmenu<br/><br/>TestTestTest<br/>Test<br/>Test<br/>Test<br/>Test<br/>Test<br/>Test<br/>Test<br/>TestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTest<br/>Test<br/>Test<br/>Test<br/>TestTestTest<br/>Test<br/>Test<br/>Test<br/>Test<br/>Test<br/>Test<br/>Test<br/>Test<br/>Test<br/>TestTestTestTestTest<br/>Test<br/>Test<br/>Test<br/>Test<br/>Test<br/>Test<br/>Test<br/>Test<br/>Test<br/>Test<br/>Test<br/>TestTestTestTestTest<br/>Test<br/>Test<br/>Planning<br/>Planning<br/>Planning<br/>Planning<br/>Planning<br/>Planning<br/><br/><br/>http://www.myjqueryplugins.com/jquery-plugin/jmenu<br/><br/>TestTestTest<br/>Test<br/>Test<br/>Test<br/>Test<br/>Test<br/>Test<br/>Test<br/>TestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTest<br/>Test<br/>Test<br/>Test<br/>TestTestTest<br/>Test<br/>Test<br/>Test<br/>Test<br/>Test<br/>Test<br/>Test<br/>Test<br/>Test<br/>TestTestTestTestTest<br/>Test<br/>Test<br/>Test<br/>Test<br/>Test<br/>Test<br/>Test<br/>Test<br/>Test<br/>Test<br/>Test<br/>TestTestTestTestTest<br/>Test<br/>Test<br/>"});
	}

	return self.init(container);
}
