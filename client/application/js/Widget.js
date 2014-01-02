function Widget(options)
{
	var self = {};
	
	self.init = function(options)
	{
		self.m_widget			= CreateElement("div", {"class":"ui-widget"});
		self.m_widgetHeader		= CreateElement("div", {"class":"ui-widget-header ui-corner-tl ui-corner-tr", "parent":self.m_widget});
		self.m_widgetContent	= CreateElement("div", {"class":"ui-widget-content", "parent":self.m_widget, "content":"Test<br/>Test<br/>Test<br/>Test<br/>TestTestTestTestTestTestTestTestTestTest<br/>Test<br/>"});
	
		self.m_widgetHeader.height(30);
	
		if (options)
		{
			if (options.title) self.setTitle(options.title);
		}
	
		return self;
	}
	
	self.setTitle = function(title)
	{
		self.m_widgetHeader.html(title);
	}
	
	self.widget = function()
	{
		return self.m_widget;
	}
	
	self.header = function()
	{
		return self.m_widgetHeader;
	}
	
	self.content = function()
	{
		return self.m_widgetContent;
	}
	
	return self.init(options);
}

