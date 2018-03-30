class TableView extends Views {

  constructor (element){
    super(element);
  }

  template (model){
    return `
      <table>
          <thead>
            <tr>
              <th>Full Name</th>
              <th>E-mail</th>
            </tr>
          </thead>

          <tbody>
            ${Object.entries(model).map(data => `
              <tr>
                <td>${data[1].fullname}</td>
                <td>${data[1].email}</td>
              </tr>
            `).join('')}
          </tbody>

      </table>
    `
  }

}
