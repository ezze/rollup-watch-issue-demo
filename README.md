# rollup-watch-issue-demo

This repository reproduces [Rollup watch issue](https://github.com/rollup/rollup/issues/1669).

## The problem

The problem is that Rollup rebuild is triggered only once per single source file's change. The solution may be
hidden in IDE settings.

In case of [WebStorm](https://www.jetbrains.com/webstorm/) or
[PhpStorm](https://www.jetbrains.com/phpstorm/) the problem is caused by creating temporary files first on saving.
In order to disable this behavior unset `safe write` option:

> Settings | Appearance & Behavior | System Settings | Use "safe write" (save changes to temporary file first)

When files are changed directly (for example, by automatic scripts mentioned below) then everything works as expceted.

## Reproducing

1. Install dependencies:

    ```
    yarn
    ```
    
    or
    
    ```
    npm install
    ```

2. Run Rollup with `watch` flag option:

    ```
    yarn watch
    ```

    ```
    npm run watch
    ```

    Make changes of source files in `src` directory. In order to make changes automatically run:
    
    ```
    yarn makeChanges
    ```
    
    or
    
    ```
    npm run makeChanges
    ```

3. Run Rollup with [Chokidar](https://github.com/paulmillr/chokidar):

    ```
    yarn watch:chokidar
    ```
    
    or
    
    ```
    npm run watch:chokidar
    ```

    This will make changes in source files automatically.
