function monitor() {

  var url,
    httpResponse;

  url = "https://google.com";

  try {

    httpResponse = UrlFetchApp.fetch(url);

  } catch (err) {

    simpleLog_(err);

  }


  if (httpResponse && httpResponse.getResponseCode() === 200) {

    simpleLog_("Доступен");

  } else {

    simpleLog_("Не доступен");

  }
}

function simpleLog_(status) {

  Logger.log(status);

}
