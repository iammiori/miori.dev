export const getThemeScript = () => ` 
 (function() { 
   const savedMode = localStorage.getItem('themeMode') 
   const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches 
   
   if (savedMode === 'dark' || (!savedMode && prefersDark)) { 
     document.documentElement.classList.add('dark') 
   } 
 })() 
`
