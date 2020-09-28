# express-async-wrapper

Enable support for async syntactic sugar in express middlewares and request handlers

## How To

Whenever an awaited promise rejects, the asyncWrapper will handle the exception passing it to the next available middleware

```
import { asyncWrapper } from '@cdellacqua/express-async-wrapper';

router.get('/example', asyncWrapper(async (req, res) => {
	await somethingThatReturnsAPromise();
	res.send('done');
}));
```

```
import { asyncWrapper } from '@cdellacqua/express-async-wrapper';

app.use(asyncWrapper(async (req, res, next) => {
	await somethingThatReturnsAPromise();
	next();
}));
```
