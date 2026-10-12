/* eslint-disable @typescript-eslint/no-unused-vars */
import app from "./app.js";

const PORT = Number(process.env.PORT) || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Current date and time: ${new Date().toISOString()}`);
});
