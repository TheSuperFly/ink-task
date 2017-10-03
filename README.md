# ink-task

> Bringing task handling on Ink.

## Introduction

Ink is awesome. But making complete CLI apps with a lot of tasks and flags could get messy.

`ink-task` is a Ink plugin that let you handle tasks, `react-router` style.


## Install

```
$ npm install ink-task
```

## Usage

Basically,

```jsx
import { Switch, Task, Help } from 'ink-task'

...

<Switch>
    <Task match="hello" defaultFlags={{ name: 'world' }} component={Greeting} />
    <Task match={[ "login", "l" ]} component={Login} />
    <Task match="*" component={Help} isHelp />
</Switch>
```

**PROPS**

- `match` : a string / array of matching keywords. `*` will always match.
- `defaultFlags` : default flags passed through the component's props if user don't fill them. 
- `component` : the component to render if a task matches.
- `isHelp` : pass through `helpData` to your component, an extra prop with your `defaultFlags` and `match` keys.

Note : Every flags user type would get to the reached component in a prop called `flags`.

**HELP COMPONENT**

This handy component use `helpData` to render a basic help message.

## Disclamer

This package is in active development. I still have a lot of features to integrate and edges to smooth. However, I'll try not break things and release bugged stuff. 

If you've spotted any problems, please fill an issue. Thanks!

Licence : **MIT**