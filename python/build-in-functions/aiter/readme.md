## Función integrada: aiter() <img src="../../../../assets/png/python/python.png" width="33" align="left" style="margin-right: 12px;">

La función **`aiter()`** devuelve un [iterador asíncrono](#). Equivalente a llamar a **`x.__aiter__()`**.  

>Nota: A diferencia de **`iter()`**, **`aiter()`** no tiene variante de 2 argumentos. Esta función esta disponible a partir de la versión 3.10. de Python

**`aiter()`** y **`anext()`** llamará a un objeto **`__aiter__()`** y **`__anext__()`**, si está presente. Son esencialmente el equivalente asíncrono de **`iter()`** y **`next()`**. En la mayoría de los casos, simplemente querrá usar un `async for`, en su lugar. Sin embargo, para comprender qué están haciendo **`aiter()`** y **`anext()`**, las corrutinas `using_async_for()` y `using_aiter_anext()` en el siguiente ejemplo son aproximadamente equivalentes:


```py
from asyncio import sleep, run

class Foo:
    def __aiter__(self):
        self.i = 0
        return self
    async def __anext__(self):
        await sleep(1)
        self.i += 1
        return self.i

async def using_async_for():
    async for bar in Foo():
        print(bar)
        if bar >= 10:
            break

async def using_aiter_anext():
    ai = aiter(Foo())
    try:
        while True:
            bar = await anext(ai)
            print(bar)
            if bar >= 10:
                break
    except StopAsyncIteration:
        return

async def main():
    print("Using async for:")
    await using_async_for()

    print("Using aiter/anext")
    await using_aiter_anext()

if __name__ == '__main__':
    run(main())
```