This project was created using [Microsoft Web Template Studio](https://github.com/Microsoft/WebTemplateStudio).

## Getting Started

The best way to launch the application is using the [Visual Studio Code Tasks](https://code.visualstudio.com/docs/editor/tasks). In the `vscode/tasks.json` file you can find all the tasks configured for this project.

To launch a task click on the menu `Terminal > Run Task` and select the task to launch (or press `Ctrl+Shift+P` and choose the `Tasks:Run Task` command).



### Frontend
Open Patients.html file. 

I had originally created an angular app front end, but ran into time wasting issues when implementing JQUERY. So I had one day to create simple html page with JQUERY CDN. Backend .net server will need to be running before db procedure can return rows to page. ALSO*** I had issues with CORS that cost me lots of time. The endpoint in the server runs for the insert into the DB, but never could get media type to match from front end in order to finish it. Postman testing did work with API as asked but cannot demo in page unfortuneatly. 




### Backend

The backend is based on [ASP.NET Web API](https://dotnet.microsoft.com/apps/aspnet/apis).

To start the backend application manually:
  1. Open a terminal and navigate to the `backend` folder path.
  2. Use `dotnet restore` to restore backend packages.
  3. Use `dotnet run` to start backend app in development. It is served on https://localhost:5001/
