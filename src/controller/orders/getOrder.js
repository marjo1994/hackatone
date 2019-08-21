const getOrders = (token, uid) => {
  return fetch(`http://165.22.166.131:4000/list/${uid}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    }
  }).then((resp) => {
    if (resp.status === 200) {
      // resp.json().then(e => console.log(e))
      return resp.json()
    } else if (resp.status === 401) {
      return Promise.reject({ message: 'Ingrese token válido' })
    }
    return Promise.reject({ message: resp.statusText })
  })

}
export default getOrders;
///list/:consultantid