# API Reference
Welcome to the [tawk.to](https://www.tawk.to) JavaScript API documentation.

The API provides a flexible set of methods that can be used in your web projects. To invoke one of the methods below, please be sure to call a method after the embed code on your page.

Use the JavaScript API to manipulate the chat widget displayed on your website.

<br/>

## Table of contents
- [API Reference](#api-reference)
  - [Table of contents](#table-of-contents)
  - [onLoad](#onload)
  - [onStatusChange](#onstatuschange)
  - [onBeforeLoad](#onbeforeload)
  - [onChatMaximized](#onchatmaximized)
  - [onChatMinimized](#onchatminimized)
  - [onChatHidden](#onchathidden)
  - [onChatStarted](#onchatstarted)
  - [onChatEnded](#onchatended)
  - [onPrechatSubmit](#onprechatsubmit)
  - [onOfflineSubmit](#onofflinesubmit)
  - [onChatMessageVisitor](#onchatmessagevisitor)
  - [onChatMessageAgent](#onchatmessageagent)
  - [onChatMessageSystem](#onchatmessagesystem)
  - [onAgentJoinChat](#onagentjoinchat)
  - [onAgentLeaveChat](#onagentleavechat)
  - [onChatSatisfaction](#onchatsatisfaction)
  - [onVisitorNameChanged](#onvisitornamechanged)
  - [onFileUpload](#onfileupload)
  - [onTagsUpdated](#ontagsupdated)
  - [onUnreadCountChanged](#onunreadcountchanged)
  - [visitor](#visitor)
  - [maximize](#maximize)
  - [minimize](#minimize)
  - [toggle](#toggle)
  - [popup](#popup)
  - [getWindowType](#getwindowtype)
  - [showWidget](#showwidget)
  - [hideWidget](#hidewidget)
  - [toggleVisibility](#togglevisibility)
  - [getStatus](#getstatus)
  - [isChatMaximized](#ischatmaximized)
  - [isChatMinimized](#ischatminimized)
  - [isChatHidden](#ischathidden)
  - [isChatOngoing](#ischatongoing)
  - [isVisitorEngaged](#isvisitorengaged)
  - [onLoaded](#onloaded)
  - [onBeforeLoaded](#onbeforeloaded)
  - [widgetPosition](#widgetposition)
  - [endChat](#endchat)
  - [setAttributes](#setattributes)
  - [addEvent](#addevent)
  - [addTags](#addtags)
  - [removeTags](#removetags)
  - [secureMode](#securemode)
  - [customstyle](#customstyle)
    - [zIndex](#zindex)
    - [Visibility](#visibility)
  - [switchWidget](#switchwidget)

<br/>

## onLoad
Callback function invoked right after the widget is rendered. This callback is not supported in pop out chat window.

``app/components/my-component.hbs``
```hbs
<TawkMessenger
    @onLoad={{this.handleOnLoad}}/>
```

``app/components/my-component.js``
```js
@action
handleOnLoad() {
    // place your code here
}
```

<br/>

## onStatusChange
Callback function invoked when the page status changes. The function will receive the changed status which will be either online, away or offline. This callback is not supported in pop out chat window.

``app/components/my-component.hbs``
```hbs
<TawkMessenger
    @onStatusChange={{this.handleOnStatusChange}}/>
```

``app/components/my-component.js``
```js
@action
handleOnStatusChange(status) {
    // place your code here
}
```

<br/>

## onBeforeLoad
Callback function invoked right when Tawk_API is ready to be used and before the widget is rendered. This callback is not supported in pop out chat window.

``app/components/my-component.hbs``
```hbs
<TawkMessenger
    @onBeforeLoad={{this.handleOnBeforeLoad}}/>
```

``app/components/my-component.js``
```js
@action
handleOnBeforeLoad() {
    // place your code here
}
```

<br/>

## onChatMaximized
Callback function invoked when the widget is maximized. This callback is not supported in pop out chat window.

``app/components/my-component.hbs``
```hbs
<TawkMessenger
    @onChatMaximized={{this.handleOnChatMaximized}}/>
```

``app/components/my-component.js``
```js
@action
handleOnChatMaximized() {
    // place your code here
}
```

<br/>

## onChatMinimized
Callback function invoked when the widget is minimized. This callback is not supported in pop out chat window.

``app/components/my-component.hbs``
```hbs
<TawkMessenger
    @onChatMaximized={{this.handleOnChatMaximized}}/>
```

``app/components/my-component.js``
```js
@action
handleOnChatMaximized() {
    // place your code here
}
```

<br/>

## onChatHidden
Callback function invoked when the widget is hidden. This callback is not supported in pop out chat window.

``app/components/my-component.hbs``
```hbs
<TawkMessenger
    @onChatHidden={{this.handleOnChatHidden}}/>
```

``app/components/my-component.js``
```js
@action
handleOnChatHidden() {
    // place your code here
}
```

<br/>

## onChatStarted
Callback function invoked when the widget is started.

``app/components/my-component.hbs``
```hbs
<TawkMessenger
    @onChatStarted={{this.handleOnChatStarted}}/>
```

``app/components/my-component.js``
```js
@action
handleOnChatStarted() {
    // place your code here
}
```

<br/>

## onChatEnded
Callback function invoked when the widget is ended. This callback is not supported in pop out chat window.

``app/components/my-component.hbs``
```hbs
<TawkMessenger
    @onChatEnded={{this.handleOnChatEnded}}/>
```

``app/components/my-component.js``
```js
@action
handleOnChatEnded() {
    // place your code here
}
```

<br/>

## onPrechatSubmit
Callback function invoked when the Pre-Chat Form is submitted. The submitted form data is passed to the function. This callback is not supported in pop out chat window.

``app/components/my-component.hbs``
```hbs
<TawkMessenger
    @onPrechatSubmit={{this.handleOnPrechatSubmit}}/>
```

``app/components/my-component.js``
```js
@action
handleOnPrechatSubmit(data) {
    // place your code here
}
```

<br/>

## onOfflineSubmit
Callback function invoked when the Offline form is submitted. The submitted form data is passed to the function. Form data will contain {name : ”, email : ”, message : ”, questions : []}. This callback is not supported in pop out chat window.

``app/components/my-component.hbs``
```hbs
<TawkMessenger
    @onOfflineSubmit={{this.handleOnOfflineSubmit}}/>
```

``app/components/my-component.js``
```js
@action
handleOnOfflineSubmit(data) {
    // place your code here
}
```

<br/>

## onChatMessageVisitor
Callback function invoked when message is sent by the visitor. The message is passed to the function. This callback is not supported in pop out chat window.

``app/components/my-component.hbs``
```hbs
<TawkMessenger
    @onChatMessageVisitor={{this.handleOnChatMessageVisitor}}/>
```

``app/components/my-component.js``
```js
@action
handleOnChatMessageVisitor(message) {
    // place your code here
}
```

<br/>

## onChatMessageAgent
Callback function invoked when message is sent by the agent. The message is passed to the function. This callback is not supported in pop out chat window.

``app/components/my-component.hbs``
```hbs
<TawkMessenger
    @onChatMessageAgent={{this.handleOnChatMessageAgent}}/>
```

``app/components/my-component.js``
```js
@action
handleOnChatMessageAgent(message) {
    // place your code here
}
```

<br/>

## onChatMessageSystem
Callback function invoked when message is sent by the system. The message is passed to the function. This callback is not supported in pop out chat window.

``app/components/my-component.hbs``
```hbs
<TawkMessenger
    @onChatMessageSystem={{this.handleOnChatMessageSystem}}/>
```

``app/components/my-component.js``
```js
@action
handleOnChatMessageSystem(message) {
    // place your code here
}
```

<br/>

## onAgentJoinChat
Callback function invoked when an agent joins the chat. The data is passed to the function. Will contain {name : ”, position : ”, image : ”, id : ”}. This callback is not supported in pop out chat window.

``app/components/my-component.hbs``
```hbs
<TawkMessenger
    @onAgentJoinChat={{this.handleOnAgentJoinChat}}/>
```

``app/components/my-component.js``
```js
@action
handleOnAgentJoinChat(data) {
    // place your code here
}
```

<br/>

## onAgentLeaveChat
Callback function invoked when an agent leaves the chat. The data is passed to the function. Will contain {name : ”, id : ”}. This callback is not supported in pop out chat window.

``app/components/my-component.hbs``
```hbs
<TawkMessenger
    @onAgentLeaveChat={{this.handleOnAgentLeaveChat}}/>
```

``app/components/my-component.js``
```js
@action
handleOnAgentLeaveChat(data) {
    // place your code here
}
```

<br/>

## onChatSatisfaction
Callback function invoked when an agent leaves the chat. The satisfaction is passed to the function. -1 = dislike | 0 = neutral | 1 = like. This callback is not supported in pop out chat window.

``app/components/my-component.hbs``
```hbs
<TawkMessenger
    @onChatSatisfaction={{this.handleOnChatSatisfaction}}/>
```

``app/components/my-component.js``
```js
@action
handleOnChatSatisfaction(satisfaction) {
    // place your code here
}
```

<br/>

## onVisitorNameChanged
Callback function invoked when the visitor manually changes his name. The visitorName is passed to the function. This callback is not supported in pop out chat window.

``app/components/my-component.hbs``
```hbs
<TawkMessenger
    @onVisitorNameChanged={{this.handleOnVisitorNameChanged}}/>
```

``app/components/my-component.js``
```js
@action
handleOnVisitorNameChanged(visitorName) {
    // place your code here
}
```

<br/>

## onFileUpload
Callback function invoked when a file is uploaded. The link to the uploaded file is passed to the function. This callback is not supported in pop out chat window.

``app/components/my-component.hbs``
```hbs
<TawkMessenger
    @onFileUpload={{this.handleOnFileUpload}}/>
```

``app/components/my-component.js``
```js
@action
handleOnFileUpload(link) {
    // place your code here
}
```

<br/>

## onTagsUpdated
Callback function invoked when a tag is updated.

``app/components/my-component.hbs``
```hbs
<TawkMessenger
    @onTagsUpdated={{this.handleOnTagsUpdated}}/>
```

``app/components/my-component.js``
```js
@action
handleOnTagsUpdated(data) {
    // place your code here
}
```

<br/>

## onUnreadCountChanged
Callback function returns count of unread messages.

``app/components/my-component.hbs``
```hbs
<TawkMessenger
    @onUnreadCountChanged={{this.handleOnUnreadCountChanged}}/>
```

``app/components/my-component.js``
```js
@action
handleOnUnreadCountChanged(count) {
    // place your code here
}
```

<br/>

## visitor
Object used to set the visitor name and email. Do not place this object in a function, as the values need to be available before the widget script is downloaded.

Setting or changing the values after the widget script has been downloaded will not send the values to the dashboard.

If the name and email will not be available on load time (eg single page app, ajax login), then use the [setAttributes](#setAttributes) function instead.

```js
this.tawkMessenger.visitor({
    name : 'Name',
    email : 'email@email.com'
});

```

<br/>

## maximize
Maximizes the chat widget.

```js
this.tawkMessenger.maximize();

// Example

@action
handleOnLoad() {
  this.tawkMessenger.maximize();
}
```

<br/>

## minimize
Minimizes the chat widget.

```js
this.tawkMessenger.minimize();

// Example

@action
handleOnLoad() {
    this.tawkMessenger.minimize();
}
```

<br/>

## toggle
Minimizes or Maximizes the chat widget based on the current state.

```js
this.tawkMessenger.toggle();

// Example

@action
handleOnLoad() {
    this.tawkMessenger.toggle();
}
```

<br/>

## popup
Opens the chat widget as a pop out.

```js
this.tawkMessenger.popup();

// Example

@action
handleOnLoad() {
    this.tawkMessenger.popup();
}
```

<br/>

## getWindowType
Returns the current widget type whether it’s inline or embed.

```js
this.tawkMessenger.getWindowType();

// Example

@action
handleOnLoad() {
    if (this.tawkMessenger.getWindowType() === 'inline') {
        // do something if it's inline
    } else {
        // do something if it's embed
    }
}
```

<br/>

## showWidget
Shows the chat widget.

```js
this.tawkMessenger.showWidget();

// Example

@action
handleOnLoad() {
    this.tawkMessenger.showWidget();
}
```

<br/>

## hideWidget
Hides the chat widget.

```js
this.tawkMessenger.hideWidget();

// Example

@action
handleOnLoad() {
    this.tawkMessenger.hideWidget();
}
```

<br/>

## toggleVisibility
Hides or Shows the widget based on the current visibility state.

```js
this.tawkMessenger.toggleVisibility();

// Example

@action
handleOnLoad() {
    this.tawkMessenger.toggleVisibility();
}
```

<br/>

## getStatus
Returns the current page status (online, away or offline).

```js
this.tawkMessenger.getStatus();

// Example

@action
handleOnLoad() {
    const pageStatus = this.tawkMessenger.getStatus();

    if (pageStatus === 'online') {
        // do something for online
    } else if (pageStatus === 'away') {
        // do something for away
    } else {
        // do something for offline
    }
}
```

<br/>

## isChatMaximized
Returns a boolean value (true or false) indicating whether the chat widget is maximized.

```js
this.tawkMessenger.isChatMaximized();

// Example

@action
handleOnLoad() {
    if (this.tawkMessenger.isChatMaximized()) {
        // do something it it's maximized
    }
}
```

<br/>

## isChatMinimized
Returns a boolean value (true or false) indicating whether the chat widget is minimized.

```js
this.tawkMessenger.isChatMinimized();

// Example

@action
handleOnLoad() {
    if (this.tawkMessenger.isChatMinimized()) {
        // do something if it's minimized
    }
}
```

<br/>

## isChatHidden
Returns a boolean value (true or false) indicating whether the chat widget is hidden.

```js
this.tawkMessenger.isChatHidden();

// Example

@action
handleOnLoad() {
    if (this.tawkMessenger.isChatHidden()) {
        // do something if chat widget is hidden
    }
}
```

<br/>

## isChatOngoing
Returns a boolean value (true or false) indicating whether currently there is an ongoing chat.

```js
this.tawkMessenger.isChatOngoing();

// Example

@action
handleOnLoad() {
    if (this.tawkMessenger.isChatOngoing()) {
        // do something if there's ongoing chat
    }
}
```

<br/>

## isVisitorEngaged
Returns a boolean value (true or false) indicating whether the visitor is currently chatting or has requested a chat.

```js
this.tawkMessenger.isVisitorEngaged();

// Example

@action
handleOnLoad() {
    if (this.tawkMessenger.isVisitorEngaged()) {
        // do something if visitor engaged in chat
    }
}
```

<br/>

## onLoaded
Returns a boolean value (true or undefined) indicating when the plugin is ready.

```js
this.tawkMessenger.onLoaded();

// Example

if (this.tawkMessenger.onLoaded()) {
    // do something when widget is ready
}
```

## onBeforeLoaded
Returns a boolean value (true or undefined) indicating when plugin is initialized.

```js
this.tawkMessenger.onBeforeLoaded();

// Example

if (this.tawkMessenger.onBeforeLoaded()) {
    // do something before onload
}
```

## widgetPosition
Returns a string for current position of the widget.

```js
this.tawkMessenger.widgetPosition();

// Example

@action
handleOnLoad() {
    if (this.tawkMessenger.widgetPosition() === 'br') {
        // do something if the widget is at bottom right
    }
}
```

<br/>

## endChat
Ends the current ongoing chat.

```js
this.tawkMessenger.endChat();

// Example

@action
handleOnLoad() {
    this.tawkMessenger.endChat();
}
```

<br/>

## setAttributes
Sets custom metadata regarding this chat/visitor.

This function takes in two values: attribute and callback.

The attribute value is of the object data type, which is a key-value pair.

The key is of the string data type and can contain only alphanumeric characters and ‘-‘ (dash).

You can also use this function to set the visitor's name and email. However, you will need to enable the secure mode first and also supply the calculated hash value in this function.

Refer to the secure mode section below on how to do this.

The reason for enabling [secure mode](#securemode) is to safeguard data integrity — to ensure the value sent from the widget to the dashboard is true and has not been tampered with.

The callback, which is a function, will be invoked to notify whether the save failed.

Error messages returned:

1. INVALID_ATTRIBUTES: No attributes were sent
1. SESSION_EXPIRED: The visitor’s current session has expired
1. SERVER_ERROR: Internal server error
1. ACCESS_ERROR: Error in accessing the page
1. ATTRIBUTE_LIMIT_EXCEEDED: Total custom attributes (excluding name, email and hash) is 50
1. CONTAINS_INVALID_KEY: Custom key is not alphanumeric or dash (keys will be lower case)
1. CONTAINS_INVALID_VALUE: Custom value is empty or the total length is more than 255 characters

```js
this.tawkMessenger.setAttributes(attributes, callback);

// Example

@action
handleOnLoad() {
    this.tawkMessenger.setAttributes({
        id : 'A1234',
        store : 'Midvalley'
    }, function(error) {
        // do something if error
    });
}

// Example for setting name and email

@action
handleOnLoad() {
    this.tawkMessenger.setAttributes({
        name : 'Name',
        email : 'email@email.com',
        hash : 'hash value'
    }, function(error) {
        // do something if error
    });
}
```

<br/>

## addEvent
Sets a custom event to chat.
This function takes in 3 values: event name, optional metadata and callback.

The event name is of the string data type and can contain only alphanumeric characters and ‘-‘ (dash)

The callback which is a function will be invoked to notify whether the save failed.

INVALID_EVENT_NAME, INVALID_ATTRIBUTES, ATTRIBUTE_LIMIT_EXCEEDED, CONTAINS_INVALID_KEY, CONTAINS_INVALID_VALUE, SESSION_EXPIRED, SERVER_ERROR

```js
this.tawkMessenger.addEvent(eventName, metaData, callback);

// Example

@action
handleOnLoad() {
    this.tawkMessenger.addEvent(
        'requested-quotation',
        function(error) {
            // do something if error
        }
    );

    this.tawkMessenger.addEvent(
        'product-add-to-cart',
        {
            sku : 'A0012',
            name : 'Jeans',
            price : '50'
        },
        function(error) {
            // do something if error
        }
    );
}
```

<br/>

## addTags
Adds tags to the chat.
This function takes in two values: tags and callback.
This is of the array data type.
The content of the tags should be of the string data type.

The total number of tags is 10.
The callback, which is a function, will be invoked to notify whether the save failed.

INVALID_TAGS, TAG_LIMIT_EXCEEDED, VERSION_CONFLICT, SESSION_EXPIRED, SERVER_ERROR

```js
this.tawkMessenger.addTags(tags, callback);

// Example

@action
handleOnLoad() {
    this.tawkMessenger.addTags(
        [
            'hello',
            'world'
        ],
        function(error) {
            // do something if error
        }
    );
}
```

<br/>

## removeTags
Removes tags from the chat.
This function takes in two values: tags and callback.
This is of the array data type.
The content of the tags should be of the string data type.

The callback, which is a function, will be invoked to notify whether the save failed.

INVALID_TAGS, TAG_LIMIT_EXCEEDED, SESSION_EXPIRED, SERVER_ERROR

```js
this.tawkMessenger.removeTags(tags, callback);

// Example

@action
handleOnLoad() {
  this.tawkMessenger.removeTags(
    [
      'hello',
      'world'
    ],
    function (error) {
        // do something if error
    }
  );
}
```

<br/>

## secureMode
Secure method ensures the data you are sending is actually from you.

To enable secure mode, embed the following code on your page.

The hash is server side generated HMAC using SHA256, the user’s email and your site’s API key.

You can get your API key from **Admin>Property Settings**.

```js
this.tawkMessenger.visitor({
  name : 'Name',
  email : 'email@email.com',
  hash : '<calculate-hash>'
})
```

<br/>

## customstyle
Object used to update the widget styling. Currently only supports zIndex style. Do not place this object in a function, as the values need to be available before the widget script is downloaded. Setting or changing the values after the widget script has been downloaded will not update the widget’s style.

### zIndex
```js
module.exports = function (environment) {
  let ENV = {
    ...
    tawkMessenger : {
      customStyle : {
        zIndex : Integer | String 
      }
    }
    ...
  }
};

// Example

module.exports = function (environment) {
  let ENV = {
    ...
    tawkMessenger : {
      customStyle : {
        zIndex : 1000
      }
    }
    ...
  }
};

module.exports = function (environment) {
  let ENV = {
    ...
    tawkMessenger : {
      customStyle : {
        zIndex : '1000'
      }
    }
    ...
  }
};

module.exports = function (environment) {
  let ENV = {
    ...
    tawkMessenger : {
      customStyle : {
        zIndex : '1000 !important'
      }
    }
    ...
  }
};
```

<br/>

### Visibility
```js
module.exports = function (environment) {
  let ENV = {
    ...
    tawkMessenger : {
      customStyle : {
        visibility : {
            dekstop : {
                xOffset : String | Integer, // '20' || 20
                yOffset : String | Integer,
                position : '' // 'br', 'bl', 'cr', 'cl', 'tr', 'tl'
            },

            mobile : {
                xOffset : String | Integer, // '20' || 20
                yOffset : String | Integer,
                position : '' // 'br', 'bl', 'cr', 'cl', 'tr', 'tl'
            }
        }
      }
    }
    ...
  }
};

// Example

module.exports = function (environment) {
  let ENV = {
    ...
    tawkMessenger : {
      customStyle : {
        visibility : {
            dekstop : {
                xOffset : '15',
                yOffset : '15',
                position : 'cr'
            },

            mobile : {
                xOffset : 15,
                yOffset : 15,
                position : 'bl'
            }
        }
      }
    }
    ...
  }
};
```

<br/>

## switchWidget
Disconnect the current widget connection, logout if it has existing user login and switch to
another widget.

```js
this.tawkMessenger.switchWidget(data, callback);

// Example

@action
handleOnLoad() {
    this.tawkMessenger.switchWidget({
        propertyId : 'your-property-id',
        widgetId : 'your-widget-id'
    }, function () {
        // do something
    });
}
```
