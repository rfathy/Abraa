# Abraa

### Preview

```

```

### Installation

```
- Rails install from : http://railsinstaller.org/en
- Config git after installation
- Gem install bundler
- Gem install haml
- Error "unknown encoding name - CP720": fixed with => chcp 1252 . works from CMD not Bash
- Add haml_watch
- Run ruby haml_watch.rb src
- Terminate compilation ctrl+c
- npm install -g less
- npm install -g less-watch-compiler
- less-watch-compiler <source_dir> <destination_dir>
- include partial => 
	= Haml::Engine.new(File.read(File.expand_path 'includes/menu-main.haml', File.dirname(__FILE__))).render
```