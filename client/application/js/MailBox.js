function MailBox(container)
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
		self.m_container.html("MailBox<br/>MailBox<br/><br/><br/>http://www.myjqueryplugins.com/jquery-plugin/jmenu<br/><br/>MailBox<br/>Test<br/>Test<br/>Test<br/>Test<br/>Test<br/>Test<br/>Test<br/>TestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTest<br/>Test<br/>Test<br/>Test<br/>TestTestTest<br/>Test<br/>Test<br/>Test<br/>Test<br/>Test<br/>Test<br/>Test<br/>Test<br/>Test<br/>TestTestTestTestTest<br/>Test<br/>Test<br/>Test<br/>Test<br/>Test<br/>Test<br/>Test<br/>Test<br/>Test<br/>Test<br/>Test<br/>TestTestTestTestTest<br/>Test<br/>Test<br/>");
	}

	return self.init(container);
}
