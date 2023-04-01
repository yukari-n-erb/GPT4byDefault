function observeDOMChanges() {
    // Get a target element
    const targetNode = document.body;
  
    // Set observer
    const config = { childList: true, subtree: true };
  
    // Callback function when new Chat page access
    const callback = (mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.type === "childList") {
          const currentUrl = window.location.href;
          const targetUrl = 'https://chat.openai.com/chat';
  
          if (currentUrl === targetUrl) {
            // Redirect to GPT-4 chat page
            const redirectToUrl = 'https://chat.openai.com/chat?model=gpt-4';
            window.location.href = redirectToUrl;
          }
        }
      }
    };
  
    // Create an observer instance
    const observer = new MutationObserver(callback);
  
    // Start observing to target element
    observer.observe(targetNode, config);
  }
  
  // Start observing DOM changes
  observeDOMChanges();
  