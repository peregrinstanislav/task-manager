# task-manager

Application for task management of dynamically changed task types.
We assume that task will always have its "id", "name" and task "type" property, but values inside "fields" property can be dynamically changed accroding to users requirements. If there will be request for new task type, application can react to this just by editing form.json without any further programming.
Technololgy used in this app:

- UI

  - angular flex layout (angular wrapper on css grid and flexbox)
  - angular material UI components
  - devextreme datagrid
  - scss and dynamic classes generators

- Data management

  - rxjs
  - ngrx component store

- Other

  - ngx-translate
  - lodash

Steps to run application:

1. checkout master branch
2. run "npm install"
3. run "ng serve" to run application on localhost
