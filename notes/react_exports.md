
# React has 2 main types of exports:
1. Specific, which is not set to the default and must 
    be declared with the same name wherever it's imported.
2. Default, Which can be named any banana word when importing it into
    another file.


# Wildcard import, discouraged but effective:
When importing multiple items there is an option to use
[*] and create an alias name for all of the imports from a particular file or resource.
    This essentially bundles them into an object referenced
    by that alias name, and using dot notation to access
    different functions, methods, or vars packaged inside.
It's not advised to use the wildcard to import as it may become difficult to track what is being imported and used.