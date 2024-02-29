# pos-contacts-contact-details



<!-- Auto Generated Below -->


## Properties

| Property                      | Attribute | Description | Type             | Default     |
| ----------------------------- | --------- | ----------- | ---------------- | ----------- |
| `contactsModule` _(required)_ | --        |             | `ContactsModule` | `undefined` |
| `uri` _(required)_            | `uri`     |             | `string`         | `undefined` |


## Events

| Event                            | Description | Type                |
| -------------------------------- | ----------- | ------------------- |
| `pod-os-contacts:contact-closed` |             | `CustomEvent<void>` |


## Dependencies

### Used by

 - [pos-contacts-address-book-page](../address-book-page)

### Depends on

- [pos-contacts-loading-spinner](../loading-spinner)
- ion-icon
- [pos-contacts-phone-numbers](phone-numbers)
- [pos-contacts-email-addresses](email-addresses)

### Graph
```mermaid
graph TD;
  pos-contacts-contact-details --> pos-contacts-loading-spinner
  pos-contacts-contact-details --> ion-icon
  pos-contacts-contact-details --> pos-contacts-phone-numbers
  pos-contacts-contact-details --> pos-contacts-email-addresses
  pos-contacts-phone-numbers --> ion-icon
  pos-contacts-email-addresses --> ion-icon
  pos-contacts-address-book-page --> pos-contacts-contact-details
  style pos-contacts-contact-details fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
