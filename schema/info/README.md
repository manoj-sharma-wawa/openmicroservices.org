# Info

This is present in the root of the document, and looks like this:
```yaml
info:
  version: 1.0.1
  title: Currency Converter 
  description: This is a sample currency converter service
  contact:
    name: John Doe
    url: https://support.example.com
    email: support@example.com
  license:
    name: MIT
    url: https://opensource.org/licenses/MIT 
```

<json-table>
<p>
{
  "version": {
    "required": true,
    "desc": "The version of your service. It **MAY** indicate whether this is an alpha or a beta version as well."
  },
  "title": {
    "required": true,
    "desc": "A human friendly title for your service."
  },
  "description": {
    "required": true,
    "desc": "A human friendly description for your service."
  },
  "contact": {
    "required": false,
    "desc": "A contact object, describing the person or company to contact.",
    "$block": {
      "name": {
        "required": false,
        "desc": "The name of the person or company."
      },
      "url": {
        "required": false,
        "desc": "The homepage URL of the person or company."
      },
      "email": {
        "required": false,
        "desc": "The email address of the person or company."
      }
    }
  }
}
</p>
</json-table>