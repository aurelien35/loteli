function ConfigureDataTables()
{
	$.fn.dataTable.defaults.bJQueryUI						= true;			
	$.fn.dataTable.defaults.bSort							= true;			
	$.fn.dataTable.defaults.bAutoWidth						= true;
	$.fn.dataTable.defaults.sPaginationType					= "full_numbers";
	$.fn.dataTable.defaults.oLanguage.sProcessing			= "Traitement en cours...";
	$.fn.dataTable.defaults.oLanguage.sSearch				= "Rechercher&nbsp;:";
	$.fn.dataTable.defaults.oLanguage.sLengthMenu			= "Afficher _MENU_ &eacute;l&eacute;ments par page";
	$.fn.dataTable.defaults.oLanguage.sInfo					= "Affichage des &eacute;lements _START_ &agrave; _END_ sur _TOTAL_";
	$.fn.dataTable.defaults.oLanguage.sInfoEmpty			= "";
	$.fn.dataTable.defaults.oLanguage.sInfoFiltered			= "(filtr&eacute; de _MAX_ &eacute;l&eacute;ments au total)";
	$.fn.dataTable.defaults.oLanguage.sInfoPostFix			= "";
	$.fn.dataTable.defaults.oLanguage.sLoadingRecords		= "Chargement en cours...";
	$.fn.dataTable.defaults.oLanguage.sZeroRecords			= "Aucun &eacute;l&eacute;ment &agrave; afficher";
	$.fn.dataTable.defaults.oLanguage.sEmptyTable			= "Aucune donn&eacute;e disponible";
	$.fn.dataTable.defaults.oLanguage.oPaginate.sFirst		= "Premier";
	$.fn.dataTable.defaults.oLanguage.oPaginate.sPrevious	= "Pr&eacute;c&eacute;dent";
	$.fn.dataTable.defaults.oLanguage.oPaginate.sNext		= "Suivant";
	$.fn.dataTable.defaults.oLanguage.oPaginate.sLast		= "Dernier";
	$.fn.dataTable.defaults.oLanguage.oAria.sSortAscending	= ": activer pour trier la colonne par ordre croissant";
	$.fn.dataTable.defaults.oLanguage.oAria.sSortDescending	= ": activer pour trier la colonne par ordre d&eacute;croissant";
}

function CreateElement(tag, options)
{
	var resultElement	= document.createElement(tag);
	var result			= $(resultElement);
	
	if (options)
	{
		if (options['id'])		result.attr("id", options['id']);
		if (options['type'])	result.attr("type", options['type']);
		if (options['size'])	result.attr("size", options['size']);
		if (options['cols'])	result.attr("cols", options['cols']);
		if (options['rows'])	result.attr("rows", options['rows']);
		if (options['class'])	result.addClass(options['class']);
		if (options['content'])	result.html(options['content']);
		if (options['click'])	result.click(options['click']);
		if (options['parent'])	options['parent'].append(result);
	}
	
	return result;
}

function CreateForm()
{
	return CreateElement("table", {"class":"ui-form"});
}

function CreateFormRow(label, input_1, input_2, parentForm)
{
	var result		= CreateElement("tr", {"parent":parentForm});
	var labelCell	= CreateElement("td", {"parent":result, "content":label, "class":"alignRight alignTop topPadding_5px rightPadding_5px textBold"});
	
	var inputCell_1	= CreateElement("td", {"parent":result});
	inputCell_1.append(input_1);

	if ( (input_2 != null) && (input_2 != undefined) )
	{
		var inputCell_2	= CreateElement("td", {"parent":result});
		inputCell_2.append(input_2);
	}
	else
	{
		inputCell_1.attr("colspan", "2");
	}	
	
	return result;
}

function CreateDataTable(elementOptions, dataTableOptions)
{
	var result = CreateElement("table", elementOptions);
	result.dataTable(dataTableOptions);
	
	return result;
}
