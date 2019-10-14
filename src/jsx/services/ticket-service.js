import Request from './request';

const TicketService = {

  /**
   * Get Tickets
   *
   * @param {string}   query query string with paging options
   * @param {function} callback (err, data)
                       The function that is called after a service call
                       error {object}: null if no error
                       data {object}: The data set of a succesful call
   */
  getTickets: (query, callback) => {
    if (!$.isFunction(callback)) throw new Error('callback function is required');
    query = query || '';
    Request.get(`/api/tickets${query}`, callback);
  },

  /**
   * Get Company by id
   *
   * @param {string}   id company id
   * @param {function} callback (err, data)
                       The function that is called after a service call
                       error {object}: null if no error
                       data {object}: The data set of a succesful call
   */
  getCompany: (id, callback) => {
    if (!$.isFunction(callback)) throw new Error('callback function is required');
    Request.get(`/api/companies/${id}`, callback);
  },

  /**
   * Get Company by id
   *
   * @param {string}   subdomain company subdomain
   * @param {function} callback (err, data)
                       The function that is called after a service call
                       error {object}: null if no error
                       data {object}: The data set of a succesful call
   */
  getCompanyBySubdomain: (subdomain, callback) => {
    if (!$.isFunction(callback)) throw new Error('callback function is required');
    Request.get(`/api/companies/subdomain/${subdomain}`, callback);
  },

  /**
   * Add new ticket
   *
   * @param {object}   company company object to add
   * @param {function} callback (err, data)
                       The function that is called after a service call
                       error {object}: null if no error
                       data {object}: The data set of a succesful call
   */
  newTicket: (ticket, callback) => {
    if (!$.isFunction(callback)) throw new Error('callback function is required');
    Request.post('/api/tickets', JSON.stringify({ ticket /* :ticket */ }), callback);
  },

  /**
   * Update a company
   *
   * @param {object}   company company object to update
   * @param {function} callback (err, data)
                       The function that is called after a service call
                       error {object}: null if no error
                       data {object}: The data set of a succesful call
   */
  updateCompany: (company, callback) => {
    if (!$.isFunction(callback)) throw new Error('callback function is required');
    Request.put('/api/companies', JSON.stringify({ company /* :company */ }), callback);
  },

  /**
   * Delete a company
   *
   * @param {string}   id company id
   * @param {function} callback (err, data)
                       The function that is called after a service call
                       error {object}: null if no error
                       data {object}: The data set of a succesful call
   */
  deleteCompany: (id, callback) => {
    if (!$.isFunction(callback)) throw new Error('callback function is required');
    Request.delete(`/api/companies/${id}`, callback);
  }
};

export default TicketService;
