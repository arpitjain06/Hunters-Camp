from __future__ import unicode_literals
from frappe import _

def get_data():
	return [
		
		{
			"label": _("CRM"),
			"icon": "icon-star",
			"items": [
				# {
				# 	"type": "doctype",
				# 	"name": "Lead",
				# 	"description": _("Lead Details"),
				# },
				{
					"type": "doctype",
					"name": "Customer",
					"description": _("Customer Details"),
				},
				{
					"type": "doctype",
					"name": "Enquiry",
					"description": _("Lead/Customer enquiry form"),
				},
				{
					"type": "doctype",
					"name": "Lead Management",
					"description": _("Allocation of lead/customer to consultant"),
				},
				{
					"type": "doctype",
					"name": "Site Visit",
					"description": _("Sales Executive Visit Details"),
				},
				{
					"type": "doctype",
					"name": "ACM Visit",
					"description": _("ACM Visit Details"),
				},
			]
		},

		{
			"label": _("Property"),
			"icon": "icon-star",
			"items": [
				{
					"type": "page",
					"name": "property",
					"label": _("Property Search"),
					"icon": "icon-bar-chart",
				},
				{
					"type": "doctype",
					"name": "Property",
					"label": _("Post Property"),
					"description": _("Post Property"),
				}
			]
		},

		{
			"label": _("Project"),
			"icon": "icon-star",
			"items": [
				{
					"type": "page",
					"name": "project",
					"label": _("Project Search"),
					"icon": "icon-bar-chart",
				},
				{
					"type": "doctype",
					"name": "Projects",
					"label": _("Post Project"),
					"description": _("Post Project"),
				}
			]
		},
		{
			"label": _("Masters"),
			"icon": "icon-star",
			"items": [
				{
					"type": "doctype",
					"name": "State",
					"description": _("State Master"),
				},
				{
					"type": "doctype",
					"name": "City",
					"description": _("Cities in State"),
				},
				{
					"type": "doctype",
					"name": "Location",
					"description": _("Location Master"),
				},
				{
					"type": "doctype",
					"name": "Property Type",
					"description": _("Types of Properties"),
				},
				{
					"type": "doctype",
					"name": "Property Subtype",
					"description": _("Sub Types of Properties"),
				},
				{
					"type": "doctype",
					"name": "Property Subtype Option",
					"description": _("Sub Type Option of Properties"),
				},
				{
					"type": "doctype",
					"name": "Amenities",
					"description": _("Amenities for property"),
				},
				{
					"type": "doctype",
					"name": "Flat Facilities",
					"description": _("Facilities of Flats"),
				},
				{
					"type": "doctype",
					"name": "Area",
					"description": _("Location / Area"),
				}
				
			]
		},
		{
			"label": _("Agent"),
			"icon": "icon-table",
			"items": [
				{
					"type": "doctype",
					"name": "Agent",
					"label": _("Agent"),
					"description": _("Agent Details"),
				},
				{
					"type": "doctype",
					"name": "Agent Package",
					"label": _("Agent Package"),
					"description": _("Agent Package Details"),
				},
				{
					"type": "report",
					"name":"Agent Properties",
					"doctype": "Agent",
					"is_query_report": True
				},
				{
					"type": "report",
					"name":"Agent Location Report",
					"doctype": "Agent",
					"is_query_report": True
				},
			]
		},
		{
			"label": _("Report"),
			"icon": "icon-table",
			"items": [
				{
					"type": "report",
					"name":"Followup Log",
					"doctype": "Lead Management",
					"is_query_report": True,
				},
			]
		},

	]
