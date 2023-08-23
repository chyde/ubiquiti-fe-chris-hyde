export default function getData(callback: Function, isTest = true) {
  fetch(
    isTest ? "./test.json" : "https://static.ui.com/fingerprint/ui/public.json",
    {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    }
  )
    .then((response) => {
      if (response.ok) {
        const res = response.json().then((data) => {
          console.log("DATA Version", data?.version);
          callback(data);
        });
        // console.log("RESPONSE", res);
      } else {
        callback(null);
        throw new Error("Something went wrong");
      }
    })
    .catch((error) => {
      console.log("WE GOT AN ERROR", error.message);
    });
}
