class GooddeloApi {
  constructor({ baseUrl }) {
    this.baseUrl = baseUrl;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getIndicators() {
    return fetch(`${this.baseUrl}/data`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => this._checkResponse(res));
  }
}

//***********************************************************************создаем экземпляр класса GooddeloApi
const gooddeloApi = new GooddeloApi({
  baseUrl: " http://dushnila.gooddelo.com",
});

export { gooddeloApi };
