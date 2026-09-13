<!--

@license Apache-2.0

Copyright (c) 2026 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# znancount

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Calculate the number of non-`NaN` elements in a double-precision complex floating-point strided array.

<section class="intro">

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/blas-ext-base-znancount
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var znancount = require( '@stdlib/blas-ext-base-znancount' );
```

#### znancount( N, x, strideX )

Computes the number of non-`NaN` elements in a double-precision complex floating-point strided array.

```javascript
var Complex128Array = require( '@stdlib/array-complex128' );

var x = new Complex128Array( [ 1.0, -2.0, NaN, 2.0 ] );

var v = znancount( x.length, x, 1 );
// returns 1
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **x**: input [`Complex128Array`][@stdlib/array/complex128].
-   **strideX**: stride length for `x`.

The `N` and stride parameters determine which elements in the strided array are accessed at runtime. For example, to count every other element in `x`,

```javascript
var Complex128Array = require( '@stdlib/array-complex128' );

var x = new Complex128Array( [ 1.0, 2.0, NaN, -2.0, 4.0, 3.0, NaN, NaN ] );

var v = znancount( 2, x, 2 );
// returns 2
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Complex128Array = require( '@stdlib/array-complex128' );

var x0 = new Complex128Array( [ 2.0, 1.0, NaN, -2.0, 3.0, 4.0, NaN, NaN ] );
var x1 = new Complex128Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

var v = znancount( 2, x1, 2 );
// returns 0
```

#### znancount.ndarray( N, x, strideX, offsetX )

Computes the number of non-`NaN` elements in a double-precision complex floating-point strided array using alternative indexing semantics.

```javascript
var Complex128Array = require( '@stdlib/array-complex128' );

var x = new Complex128Array( [ 2.0, 1.0, -2.0, -2.0, 3.0, 4.0, NaN, NaN ] );

var v = znancount.ndarray( 4, x, 1, 0 );
// returns 3
```

The function has the following additional parameter:

-   **offsetX**: starting index for `x`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameter supports indexing semantics based on a starting index. For example, to count every other element in `x` starting from the second element,

```javascript
var Complex128Array = require( '@stdlib/array-complex128' );

var x = new Complex128Array( [ 2.0, 1.0, NaN, -2.0, 3.0, 4.0, NaN, NaN ] );

var v = znancount.ndarray( 2, x, 2, 1 );
// returns 0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `0`.
-   An element is considered `NaN` if either its real or imaginary component is `NaN`.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random-base-uniform' );
var filledarrayBy = require( '@stdlib/array-filled-by' );
var bernoulli = require( '@stdlib/random-base-bernoulli' );
var Complex128Array = require( '@stdlib/array-complex128' );
var znancount = require( '@stdlib/blas-ext-base-znancount' );

function rand() {
    if ( bernoulli( 0.8 ) < 1 ) {
        return NaN;
    }
    return uniform( -50.0, 50.0 );
}

var xbuf = filledarrayBy( 10, 'float64', rand );
console.log( xbuf );

var x = new Complex128Array( xbuf );
var v = znancount( x.length, x, 1 );
console.log( v );
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/blas/ext/base/znancount.h"
```

#### stdlib_strided_znancount( N, \*X, strideX )

Computes the number of non-`NaN` elements in a double-precision complex floating-point strided array.

```c
#include "stdlib/complex/float64/ctor.h"

const stdlib_complex128_t x[] = {
    stdlib_complex128( 2.0, 1.0 ),
    stdlib_complex128( 0.0/0.0, -2.0 ),
    stdlib_complex128( 3.0, 4.0 ),
    stdlib_complex128( 0.0/0.0, 0.0/0.0 )
};

int v = stdlib_strided_znancount( 4, x, 1 );
// returns 2
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **X**: `[in] stdlib_complex128_t*` input array.
-   **strideX**: `[in] CBLAS_INT` stride length for `X`.

```c
CBLAS_INT stdlib_strided_znancount( const CBLAS_INT N, const stdlib_complex128_t *X, const CBLAS_INT strideX );
```

#### stdlib_strided_znancount_ndarray( N, \*X, strideX, offsetX )

Computes the number of non-`NaN` elements in a double-precision complex floating-point strided array using alternative indexing semantics.

```c
#include "stdlib/complex/float64/ctor.h"

const stdlib_complex128_t x[] = {
    stdlib_complex128( 2.0, 1.0 ),
    stdlib_complex128( 0.0/0.0, -2.0 ),
    stdlib_complex128( 3.0, 4.0 ),
    stdlib_complex128( 0.0/0.0, 0.0/0.0 )
};

int v = stdlib_strided_znancount_ndarray( 4, x, 1, 0 );
// returns 2
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **X**: `[in] stdlib_complex128_t*` input array.
-   **strideX**: `[in] CBLAS_INT` stride length for `X`.
-   **offsetX**: `[in] CBLAS_INT` starting index for `X`.

```c
CBLAS_INT stdlib_strided_znancount_ndarray( const CBLAS_INT N, const stdlib_complex128_t *X, const CBLAS_INT strideX, const CBLAS_INT offsetX );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

### Notes

-   If `N <= 0`, both functions return `0`.
-   An element is considered `NaN` if either its real or imaginary component is `NaN`.

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/blas/ext/base/znancount.h"
#include "stdlib/complex/float64/ctor.h"
#include <stdio.h>

int main( void ) {
    // Create a strided array:
    const stdlib_complex128_t x[] = {
        stdlib_complex128( 1.0, 2.0 ),
        stdlib_complex128( 3.0, 4.0 ),
        stdlib_complex128( 0.0/0.0, 5.0 ), // NaN
        stdlib_complex128( 6.0, 0.0/0.0 ), // NaN
        stdlib_complex128( 7.0, 8.0 )
    };

    // Specify the number of elements:
    const int N = 5;

    // Specify the stride length:
    const int strideX = 1;

    // Compute the number of non-NaN elements:
    int v = stdlib_strided_znancount( N, x, strideX );

    // Print the result:
    printf( "count: %d\n", v );
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-ext-base-znancount.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-ext-base-znancount

[test-image]: https://github.com/stdlib-js/blas-ext-base-znancount/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/blas-ext-base-znancount/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-ext-base-znancount/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-ext-base-znancount?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-ext-base-znancount.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-ext-base-znancount/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-ext-base-znancount/tree/deno
[deno-readme]: https://github.com/stdlib-js/blas-ext-base-znancount/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/blas-ext-base-znancount/tree/umd
[umd-readme]: https://github.com/stdlib-js/blas-ext-base-znancount/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/blas-ext-base-znancount/tree/esm
[esm-readme]: https://github.com/stdlib-js/blas-ext-base-znancount/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/blas-ext-base-znancount/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-ext-base-znancount/main/LICENSE

[@stdlib/array/complex128]: https://github.com/stdlib-js/array-complex128

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
