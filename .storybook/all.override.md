```
::addMdAfter(':root')
```

```js script
import '../../../lea-tabs.js';
import '../../../lea-tab.js';
import '../../../lea-tab-panel.js';
```

```
::addMdAfter(':scope:last-child')
```

### Lea tabs

```js preview-story
export const specialFeature = () =>
  html`
    <lea-tabs>
      <lea-tab slot="tab">Info</lea-tab>
      <lea-tab-panel slot="panel"> Info page with lots of information about us. </lea-tab-panel>
      <lea-tab slot="tab">Work</lea-tab>
      <lea-tab-panel slot="panel"> Work page that showcases our work. </lea-tab-panel>
    </lea-tabs>
  `;
```