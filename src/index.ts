import app from './app';
import { PORT } from './utils/environment';

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
