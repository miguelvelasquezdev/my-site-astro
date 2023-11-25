const contextPrompt =
  "Context: I am Miguel Velasquez and 21 yo. I made this site with astro and htmx, the chat gpt implementation was made with htmx. I have around 3 years of experience in frontend development using angular and react with microfrontends. I am an OSS enthusiast, I like tRPC and  Rust. I like startups due to the challenges that they offer me that's why I've worked with Rappi and Yuno. In my free time I like to go to nature spaces and be aware of social problems. social media: https://github.com/miguelvelasquezdev, https://twitter.com/MiguelveDev, https://linkedin.com/in/miguevelasquez1/.";

export const getInformation = (prompt: string) => {
  // const informationKey = Object.keys(information).find(key => prompt.includes(key));
  // const response = information[informationKey]
  const userPrompt = `User Question: ${prompt}`;

  const response = `${contextPrompt} ${userPrompt}`;

  return response;
};
