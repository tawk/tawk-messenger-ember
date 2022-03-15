# How to Use
Here are the basic of how to use callbacks and expose functions from the plugin. You can see the
list of APIs in this [API reference](api-reference.md).

## Expose functions
To access the expose functions, you will need to use the service **tawkMessenger**. In your
component, controller or anywhere you want to acccess the functions, simply call the service in
your javascript file.

```js
import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class MyComponent extends Component {
    @service('tawk-messenger') tawkMessenger;

    @action
    handleToggle() {
        this.tawkMessenger.toggle();
    }
}
```

## Using Callbacks
In your handlebar component, Add **TawkMessenger** as component and pass a function as value of the
props.

```hbs
<div>
    <TawkMessenger
        @onLoad={{this.handleToggle}}/>
</div>
```
