# Insomnia Plugin

Currently just a wrapper around the [Faker.js](https://github.com/marak/Faker.js/)

Used by adding the `Fake` template tag anywhere in insomnia that template tags can be used.
To use, add the tag, then click on it and define the path to the Faker.js function you wish to use.

```
// if you want to use
fake.name.firstName()
// the path would be
name.firstName
```

## Install
You can add this package to the default plugins folder for insomnia:

- MacOS: `~/Library/Application\ Support/Insomnia/plugins/`
- Windows: `%APPDATA%\Insomnia\plugins\`
- Linux: `$XDG_CONFIG_HOME/Insomnia/plugins/` or `~/.config/Insomnia/plugins/`

or you can clone it wherever you want and add a its parent dir as the custom plugin path to the insomnia preferences.

NOTE: you will probably need to run NPM install inside this after cloning it. may add to NPM itself to allow for native
insomnia installing down the road... or maybe not...