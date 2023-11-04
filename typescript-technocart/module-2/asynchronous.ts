{
  // promise ---------------

  //  simulate -------
  // costume promise -----------------

  type Something = { something: string };

  const createPromise = (): Promise<Something> => {
    return new Promise((resolve, reject) => {
      const data: Something = { something: "something" };
      if (data) {
        resolve(data);
      } else {
        reject("Failed to load data");
      }
    });
  };

  // calling create promise function
  const showData = async (): Promise<Something> => {
    const data: Something = await createPromise();
    return data;
  };

  showData();

  // get data from server ------------------------

  type Todo = {
    userId:number;
    id:number;
    title: string;
    completed:boolean;
  }

  const getTodo = async(): Promise<Todo>=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    const data : Todo = await response.json();
    return data;
    // console.log(data)
  }

  getTodo();



  //
}
