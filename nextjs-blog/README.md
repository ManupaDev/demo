# Adding Scripts

```jsx
<Script
  src="https://connect.facebook.net/en_US/sdk.js"
  strategy="lazyOnload"
  onLoad={() =>
    console.log(`script loaded correctly, window.FB has been populated`)
  }
/>
```

- **strategy** controls when the third-party script should load. A value of lazyOnload tells Next.js to load this particular script lazily during browser idle time.

- **onLoad** is used to run any JavaScript code immediately after the script has finished loading. In this example, we log a message to the console that mentions that the script has loaded correctly.