# API Reference
Welcome to the [tawk.to](https://www.tawk.to) JavaScript API documentation.

The API provides a flexible set of methods that can be used in your web projects. To invoke one of the methods below, please be sure to call a method after the embed code on your page.

Use the JavaScript API to manipulate the chat widget displayed on your website.

<br/>

## Table of contents
- [API Reference](#api-reference)
  - [Table of contents](#table-of-contents)
  - [tawkOnLoad](#tawkonload)
  - [tawkOnStatusChange](#tawkonstatuschange)
  - [tawkOnBeforeLoad](#tawkonbeforeload)
  - [tawkOnChatMaximized](#tawkonchatmaximized)
  - [tawkOnChatMinimized](#tawkonchatminimized)
  - [tawkOnChatHidden](#tawkonchathidden)
  - [tawkOnChatStarted](#tawkonchatstarted)
  - [tawkOnChatEnded](#tawkonchatended)
  - [tawkOnPrechatSubmit](#tawkonprechatsubmit)
  - [tawkOnOfflineSubmit](#tawkonofflinesubmit)
  - [tawkOnChatMessageVisitor](#tawkonchatmessagevisitor)
  - [tawkOnChatMessageAgent](#tawkonchatmessageagent)
  - [tawkOnChatMessageSystem](#tawkonchatmessagesystem)
  - [tawkOnAgentJoinChat](#tawkonagentjoinchat)
  - [tawkOnAgentLeaveChat](#tawkonagentleavechat)
  - [tawkOnChatSatisfaction](#tawkonchatsatisfaction)
  - [tawkOnVisitorNameChanged](#tawkonvisitornamechanged)
  - [tawkOnFileUpload](#tawkonfileupload)
  - [tawkOnTagsUpdated](#tawkontagsupdated)
  - [tawkOnUnreadCountChanged](#tawkonunreadcountchanged)
  - [tawkVisitor](#tawkvisitor)
  - [tawkMaximize](#tawkmaximize)
  - [tawkMinimize](#tawkminimize)
  - [tawkToggle](#tawktoggle)
  - [tawkPopup](#tawkpopup)
  - [tawkGetWindowType](#tawkgetwindowtype)
  - [tawkShowWidget](#tawkshowwidget)
  - [tawkHideWidget](#tawkhidewidget)
  - [tawkToggleVisibility](#tawktogglevisibility)
  - [tawkGetStatus](#tawkgetstatus)
  - [tawkIsChatMaximized](#tawkischatmaximized)
  - [tawkIsChatMinimized](#tawkischatminimized)
  - [tawkIsChatHidden](#tawkischathidden)
  - [tawkIsChatOngoing](#tawkischatongoing)
  - [tawkIsVisitorEngaged](#tawkisvisitorengaged)
  - [tawkOnLoaded](#tawkonloaded)
  - [tawkOnBeforeLoaded](#tawkonbeforeloaded)
  - [tawkWidgetPosition](#tawkwidgetposition)
  - [tawkEndChat](#tawkendchat)
  - [tawkSetAttributes](#tawksetattributes)
  - [tawkAddEvent](#tawkaddevent)
  - [tawkAddTags](#tawkaddtags)
  - [tawkRemoveTags](#tawkremovetags)
  - [secureMode](#securemode)
  - [customstyle](#customstyle)
    - [zIndex](#zindex)
    - [Visibility](#visibility)

<br/>

## tawkOnLoad
Callback function invoked right after the widget is rendered. This callback is not supported in pop out chat window.

``app/components/my-component.hbs``
```hbs
<TawkMessenger
    @tawkOnLoad={{this.handleOnLoad}}/>
```

``app/components/my-component.js``
```js
@action
handleOnLoad() {
    // place your code here
}
```

<br/>

## tawkOnStatusChange
Callback function invoked when the page status changes. The function will receive the changed status which will be either online, away or offline. This callback is not supported in pop out chat window.

``app/components/my-component.hbs``
```hbs
<TawkMessenger
    @tawkOnStatusChange={{this.handleOnStatusChange}}/>
```

``app/components/my-component.js``
```js
@action
handleOnStatusChange(status) {
    // place your code here
}
```

<br/>

## tawkOnBeforeLoad
Callback function invoked right when Tawk_API is ready to be used and before the widget is rendered. This callback is not supported in pop out chat window.

``app/components/my-component.hbs``
```hbs
<TawkMessenger
    @tawkOnBeforeLoad={{this.handleOnBeforeLoad}}/>
```

``app/components/my-component.js``
```js
@action
handleOnBeforeLoad() {
    // place your code here
}
```

<br/>

## tawkOnChatMaximized
Callback function invoked when the widget is maximized. This callback is not supported in pop out chat window.

``app/components/my-component.hbs``
```hbs
<TawkMessenger
    @tawkOnChatMaximized={{this.handleOnChatMaximized}}/>
```

``app/components/my-component.js``
```js
@action
handleOnChatMaximized() {
    // place your code here
}
```

<br/>

## tawkOnChatMinimized
Callback function invoked when the widget is minimized. This callback is not supported in pop out chat window.

``app/components/my-component.hbs``
```hbs
<TawkMessenger
    @tawkOnChatMinimized={{this.handleOnChatMinimized}}/>
```

``app/components/my-component.js``
```js
@action
handleOnChatMinimized() {
    // place your code here
}
```

<br/>

## tawkOnChatHidden
Callback function invoked when the widget is hidden. This callback is not supported in pop out chat window.

``app/components/my-component.hbs``
```hbs
<TawkMessenger
    @tawkOnChatHidden={{this.handleOnChatHidden}}/>
```

``app/components/my-component.js``
```js
@action
handleOnChatHidden() {
    // place your code here
}
```

<br/>

## tawkOnChatStarted
Callback function invoked when the widget is started.

``app/components/my-component.hbs``
```hbs
<TawkMessenger
    @tawkOnChatStarted={{this.handleOnChatStarted}}/>
```

``app/components/my-component.js``
```js
@action
handleOnChatStarted() {
    // place your code here
}
```

<br/>

## tawkOnChatEnded
Callback function invoked when the widget is ended. This callback is not supported in pop out chat window.

``app/components/my-component.hbs``
```hbs
<TawkMessenger
    @tawkOnChatEnded={{this.handleOnChatEnded}}/>
```

``app/components/my-component.js``
```js
@action
handleOnChatEnded() {
    // place your code here
}
```

<br/>

## tawkOnPrechatSubmit
Callback function invoked when the Pre-Chat Form is submitted. The submitted form data is passed to the function. This callback is not supported in pop out chat window.

``app/components/my-component.hbs``
```hbs
<TawkMessenger
    @tawkOnPrechatSubmit={{this.handleOnPrechatSubmit}}/>
```

``app/components/my-component.js``
```js
@action
handleOnPrechatSubmit(data) {
    // place your code here
}
```

<br/>

## tawkOnOfflineSubmit
Callback function invoked when the Offline form is submitted. The submitted form data is passed to the function. Form data will contain {name : ”, email : ”, message : ”, questions : []}. This callback is not supported in pop out chat window.

``app/components/my-component.hbs``
```hbs
<TawkMessenger
    @tawkOnOfflineSubmit={{this.handleOnOfflineSubmit}}/>
```

``app/components/my-component.js``
```js
@action
handleOnOfflineSubmit(data) {
    // place your code here
}
```

<br/>

## tawkOnChatMessageVisitor
Callback function invoked when message is sent by the visitor. The message is passed to the function. This callback is not supported in pop out chat window.

``app/components/my-component.hbs``
```hbs
<TawkMessenger
    @tawkOnChatMessageVisitor={{this.handleOnChatMessageVisitor}}/>
```

``app/components/my-component.js``
```js
@action
handleOnChatMessageVisitor(message) {
    // place your code here
}
```

<br/>

## tawkOnChatMessageAgent
Callback function invoked when message is sent by the agent. The message is passed to the function. This callback is not supported in pop out chat window.

``app/components/my-component.hbs``
```hbs
<TawkMessenger
    @tawkOnChatMessageAgent={{this.handleOnChatMessageAgent}}/>
```

``app/components/my-component.js``
```js
@action
handleOnChatMessageAgent(message) {
    // place your code here
}
```

<br/>

## tawkOnChatMessageSystem
Callback function invoked when message is sent by the system. The message is passed to the function. This callback is not supported in pop out chat window.

``app/components/my-component.hbs``
```hbs
<TawkMessenger
    @tawkOnChatMessageSystem={{this.handleOnChatMessageSystem}}/>
```

``app/components/my-component.js``
```js
@action
handleOnChatMessageSystem(message) {
    // place your code here
}
```

<br/>

## tawkOnAgentJoinChat
Callback function invoked when an agent joins the chat. The data is passed to the function. Will contain {name : ”, position : ”, image : ”, id : ”}. This callback is not supported in pop out chat window.

``app/components/my-component.hbs``
```hbs
<TawkMessenger
    @tawkOnAgentJoinChat={{this.handleOnAgentJoinChat}}/>
```

``app/components/my-component.js``
```js
@action
handleOnAgentJoinChat(data) {
    // place your code here
}
```

<br/>

## tawkOnAgentLeaveChat
Callback function invoked when an agent leaves the chat. The data is passed to the function. Will contain {name : ”, id : ”}. This callback is not supported in pop out chat window.

``app/components/my-component.hbs``
```hbs
<TawkMessenger
    @tawkOnAgentLeaveChat={{this.handleOnAgentLeaveChat}}/>
```

``app/components/my-component.js``
```js
@action
handleOnAgentLeaveChat(data) {
    // place your code here
}
```

<br/>

## tawkOnChatSatisfaction
Callback function invoked when an agent leaves the chat. The satisfaction is passed to the function. -1 = dislike | 0 = neutral | 1 = like. This callback is not supported in pop out chat window.

``app/components/my-component.hbs``
```hbs
<TawkMessenger
    @tawkOnChatSatisfaction={{this.handleOnChatSatisfaction}}/>
```

``app/components/my-component.js``
```js
@action
handleOnChatSatisfaction(satisfaction) {
    // place your code here
}
```

<br/>

## tawkOnVisitorNameChanged
Callback function invoked when the visitor manually changes his name. The visitorName is passed to the function. This callback is not supported in pop out chat window.

``app/components/my-component.hbs``
```hbs
<TawkMessenger
    @tawkOnVisitorNameChanged={{this.handleOnVisitorNameChanged}}/>
```

``app/components/my-component.js``
```js
@action
handleOnVisitorNameChanged(visitorName) {
    // place your code here
}
```

<br/>

## tawkOnFileUpload
Callback function invoked when a file is uploaded. The link to the uploaded file is passed to the function. This callback is not supported in pop out chat window.

``app/components/my-component.hbs``
```hbs
<TawkMessenger
    @tawkOnFileUpload={{this.handleOnFileUpload}}/>
```

``app/components/my-component.js``
```js
@action
handleOnFileUpload(link) {
    // place your code here
}
```

<br/>

## tawkOnTagsUpdated
Callback function invoked when a tag is updated.

``app/components/my-component.hbs``
```hbs
<TawkMessenger
    @tawkOnTagsUpdated={{this.handleOnTagsUpdated}}/>
```

``app/components/my-component.js``
```js
@action
handleOnTagsUpdated(data) {
    // place your code here
}
```

<br/>

## tawkOnUnreadCountChanged
Callback function returns count of unread messages.

``app/components/my-component.hbs``
```hbs
<TawkMessenger
    @tawkOnUnreadCountChanged={{this.handleOnUnreadCountChanged}}/>
```

``app/components/my-component.js``
```js
@action
handleOnUnreadCountChanged(count) {
    // place your code here
}
```

<br/>

## tawkVisitor
Object used to set the visitor name and email. Do not place this object in a function, as the values need to be available before the widget script is downloaded.

Setting or changing the values after the widget script has been downloaded will not send the values to the dashboard.

If the name and email will not be available on load time (eg single page app, ajax login), then use the [setAttributes](#setAttributes) function instead.

```js
this.tawkMessenger.tawkVisitor({
    name : 'Name',
    email : 'email@email.com'
});

```

<br/>

## tawkMaximize
Maximizes the chat widget.

```js
this.tawkMessenger.tawkMaximize();

// Example

@action
handleOnLoad() {
  this.tawkMessenger.tawkMaximize();
}
```

<br/>

## tawkMinimize
Minimizes the chat widget.

```js
this.tawkMessenger.tawkMinimize();

// Example

@action
handleOnLoad() {
    this.tawkMessenger.tawkMinimize();
}
```

<br/>

## tawkToggle
Minimizes or Maximizes the chat widget based on the current state.

```js
this.tawkMessenger.tawkToggle();

// Example

@action
handleOnLoad() {
    this.tawkMessenger.tawkToggle();
}
```

<br/>

## tawkPopup
Opens the chat widget as a pop out.

```js
this.tawkMessenger.tawkPopup();

// Example

@action
handleOnLoad() {
    this.tawkMessenger.tawkPopup();
}
```

<br/>

## tawkGetWindowType
Returns the current widget type whether it’s inline or embed.

```js
this.tawkMessenger.tawkGetWindowType();

// Example

@action
handleOnLoad() {
    if (this.tawkMessenger.tawkGetWindowType() === 'inline') {
        // do something if it's inline
    } else {
        // do something if it's embed
    }
}
```

<br/>

## tawkShowWidget
Shows the chat widget.

```js
this.tawkMessenger.tawkShowWidget();

// Example

@action
handleOnLoad() {
    this.tawkMessenger.tawkShowWidget();
}
```

<br/>

## tawkHideWidget
Hides the chat widget.

```js
this.tawkMessenger.tawkHideWidget();

// Example

@action
handleOnLoad() {
    this.tawkMessenger.tawkHideWidget();
}
```

<br/>

## tawkToggleVisibility
Hides or Shows the widget based on the current visibility state.

```js
this.tawkMessenger.tawkToggleVisibility();

// Example

@action
handleOnLoad() {
    this.tawkMessenger.tawkToggleVisibility();
}
```

<br/>

## tawkGetStatus
Returns the current page status (online, away or offline).

```js
this.tawkMessenger.tawkGetStatus();

// Example

@action
handleOnLoad() {
    const pageStatus = this.tawkMessenger.tawkGetStatus();

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

## tawkIsChatMaximized
Returns a boolean value (true or false) indicating whether the chat widget is maximized.

```js
this.tawkMessenger.tawkIsChatMaximized();

// Example

@action
handleOnLoad() {
    if (this.tawkMessenger.tawkIsChatMaximized()) {
        // do something it it's maximized
    }
}
```

<br/>

## tawkIsChatMinimized
Returns a boolean value (true or false) indicating whether the chat widget is minimized.

```js
this.tawkMessenger.tawkIsChatMinimized();

// Example

@action
handleOnLoad() {
    if (this.tawkMessenger.tawkIsChatMinimized()) {
        // do something if it's minimized
    }
}
```

<br/>

## tawkIsChatHidden
Returns a boolean value (true or false) indicating whether the chat widget is hidden.

```js
this.tawkMessenger.tawkIsChatHidden();

// Example

@action
handleOnLoad() {
    if (this.tawkMessenger.tawkIsChatHidden()) {
        // do something if chat widget is hidden
    }
}
```

<br/>

## tawkIsChatOngoing
Returns a boolean value (true or false) indicating whether currently there is an ongoing chat.

```js
this.tawkMessenger.tawkIsChatOngoing();

// Example

@action
handleOnLoad() {
    if (this.tawkMessenger.tawkIsChatOngoing()) {
        // do something if there's ongoing chat
    }
}
```

<br/>

## tawkIsVisitorEngaged
Returns a boolean value (true or false) indicating whether the visitor is currently chatting or has requested a chat.

```js
this.tawkMessenger.tawkIsVisitorEngaged();

// Example

@action
handleOnLoad() {
    if (this.tawkMessenger.tawkIsVisitorEngaged()) {
        // do something if visitor engaged in chat
    }
}
```

<br/>

## tawkOnLoaded
Returns a boolean value (true or undefined) indicating when the plugin is ready.

```js
this.tawkMessenger.tawkOnLoaded();

// Example

if (this.tawkMessenger.tawkOnLoaded()) {
    // do something when widget is ready
}
```

## tawkOnBeforeLoaded
Returns a boolean value (true or undefined) indicating when plugin is initialized.

```js
this.tawkMessenger.tawkOnBeforeLoaded();

// Example

if (this.tawkMessenger.tawkOnBeforeLoaded()) {
    // do something before onload
}
```

## tawkWidgetPosition
Returns a string for current position of the widget.

```js
this.tawkMessenger.tawkWidgetPosition();

// Example

@action
handleOnLoad() {
    if (this.tawkMessenger.tawkWidgetPosition() === 'br') {
        // do something if the widget is at bottom right
    }
}
```

<br/>

## tawkEndChat
Ends the current ongoing chat.

```js
this.tawkMessenger.tawkEndChat();

// Example

@action
handleOnLoad() {
    this.tawkMessenger.tawkEndChat();
}
```

<br/>

## tawkSetAttributes
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
this.tawkMessenger.tawkSetAttributes(attributes, callback);

// Example

@action
handleOnLoad() {
    this.tawkMessenger.tawkSetAttributes({
        id : 'A1234',
        store : 'Midvalley'
    }, function(error) {
        // do something if error
    });
}

// Example for setting name and email

@action
handleOnLoad() {
    this.tawkMessenger.tawkSetAttributes({
        name : 'Name',
        email : 'email@email.com',
        hash : 'hash value'
    }, function(error) {
        // do something if error
    });
}
```

<br/>

## tawkAddEvent
Sets a custom event to chat.
This function takes in 3 values: event name, optional metadata and callback.

The event name is of the string data type and can contain only alphanumeric characters and ‘-‘ (dash)

The callback which is a function will be invoked to notify whether the save failed.

INVALID_EVENT_NAME, INVALID_ATTRIBUTES, ATTRIBUTE_LIMIT_EXCEEDED, CONTAINS_INVALID_KEY, CONTAINS_INVALID_VALUE, SESSION_EXPIRED, SERVER_ERROR

```js
this.tawkMessenger.tawkAddEvent(eventName, metaData, callback);

// Example

@action
handleOnLoad() {
    this.tawkMessenger.tawkAddEvent(
        'requested-quotation',
        function(error) {
            // do something if error
        }
    );

    this.tawkMessenger.tawkAddEvent(
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

## tawkAddTags
Adds tags to the chat.
This function takes in two values: tags and callback.
This is of the array data type.
The content of the tags should be of the string data type.

The total number of tags is 10.
The callback, which is a function, will be invoked to notify whether the save failed.

INVALID_TAGS, TAG_LIMIT_EXCEEDED, VERSION_CONFLICT, SESSION_EXPIRED, SERVER_ERROR

```js
this.tawkMessenger.tawkAddTags(tags, callback);

// Example

@action
handleOnLoad() {
    this.tawkMessenger.tawkAddTags(
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

## tawkRemoveTags
Removes tags from the chat.
This function takes in two values: tags and callback.
This is of the array data type.
The content of the tags should be of the string data type.

The callback, which is a function, will be invoked to notify whether the save failed.

INVALID_TAGS, TAG_LIMIT_EXCEEDED, SESSION_EXPIRED, SERVER_ERROR

```js
this.tawkMessenger.tawkRemoveTags(tags, callback);

// Example

@action
handleOnLoad() {
  this.tawkMessenger.tawkRemoveTags(
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
this.tawkMessenger.tawkVisitor({
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
