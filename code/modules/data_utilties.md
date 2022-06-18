# Module: data-utilties

## Table of contents

### Variables

- [randomDateRangeMax](data_utilties.md#randomdaterangemax)
- [randomDateRangeMin](data_utilties.md#randomdaterangemin)

### Functions

- [incrementedNumber](data_utilties.md#incrementednumber)
- [randomBoolean](data_utilties.md#randomboolean)
- [randomDate](data_utilties.md#randomdate)
- [randomDateBetween](data_utilties.md#randomdatebetween)
- [randomElement](data_utilties.md#randomelement)
- [randomId](data_utilties.md#randomid)
- [randomNumber](data_utilties.md#randomnumber)
- [randomNumberBetween](data_utilties.md#randomnumberbetween)
- [randomString](data_utilties.md#randomstring)
- [resetIncrementedNumbers](data_utilties.md#resetincrementednumbers)

## Variables

### randomDateRangeMax

• `Const` **randomDateRangeMax**: `Date`

#### Defined in

[data-utilties.ts:58](https://github.com/MakerXStudio/ts-object-mother/blob/037055a/src/data-utilties.ts#L58)

___

### randomDateRangeMin

• `Const` **randomDateRangeMin**: `Date`

#### Defined in

[data-utilties.ts:57](https://github.com/MakerXStudio/ts-object-mother/blob/037055a/src/data-utilties.ts#L57)

## Functions

### incrementedNumber

▸ **incrementedNumber**(`key`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`number`

#### Defined in

[data-utilties.ts:85](https://github.com/MakerXStudio/ts-object-mother/blob/037055a/src/data-utilties.ts#L85)

___

### randomBoolean

▸ **randomBoolean**(): `boolean`

#### Returns

`boolean`

#### Defined in

[data-utilties.ts:75](https://github.com/MakerXStudio/ts-object-mother/blob/037055a/src/data-utilties.ts#L75)

___

### randomDate

▸ **randomDate**(): `Date`

Generates a random date between [randomDateRangeMin](data_utilties.md#randomdaterangemin) and [randomDateRangeMax](data_utilties.md#randomdaterangemax)

```typescript
  const date = randomDate
```

#### Returns

`Date`

#### Defined in

[data-utilties.ts:67](https://github.com/MakerXStudio/ts-object-mother/blob/037055a/src/data-utilties.ts#L67)

___

### randomDateBetween

▸ **randomDateBetween**(`min`, `max`): `Date`

#### Parameters

| Name | Type |
| :------ | :------ |
| `min` | `Date` |
| `max` | `Date` |

#### Returns

`Date`

#### Defined in

[data-utilties.ts:71](https://github.com/MakerXStudio/ts-object-mother/blob/037055a/src/data-utilties.ts#L71)

___

### randomElement

▸ **randomElement**<`T`\>(`elements`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `elements` | `T`[] |

#### Returns

`T`

#### Defined in

[data-utilties.ts:93](https://github.com/MakerXStudio/ts-object-mother/blob/037055a/src/data-utilties.ts#L93)

___

### randomId

▸ **randomId**(`length`): `string`

Generates a random ID with a length of `length`

```typescript
  const id = randomId(15)
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `length` | `number` |

#### Returns

`string`

#### Defined in

[data-utilties.ts:53](https://github.com/MakerXStudio/ts-object-mother/blob/037055a/src/data-utilties.ts#L53)

___

### randomNumber

▸ **randomNumber**(`allowNegative?`): `number`

Generates a random number between 0 or [Number.MIN_SAFE_INTEGER](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER) when `allowNegative` is set
and [Number.MAX_SAFE_INTEGER](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER).

```typescript
  const unsignedNumber = randomNumber()
  const signedNumber = randomNumber(true)
```

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `allowNegative` | `boolean` | `false` | A flag to allow negative numbers. |

#### Returns

`number`

#### Defined in

[data-utilties.ts:11](https://github.com/MakerXStudio/ts-object-mother/blob/037055a/src/data-utilties.ts#L11)

___

### randomNumberBetween

▸ **randomNumberBetween**(`min`, `max`): `number`

Generates a random number between `min` and `max`

```typescript
  const number = randomNumber(10, 20)
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `min` | `number` |
| `max` | `number` |

#### Returns

`number`

#### Defined in

[data-utilties.ts:22](https://github.com/MakerXStudio/ts-object-mother/blob/037055a/src/data-utilties.ts#L22)

___

### randomString

▸ **randomString**(`min`, `max`): `string`

Generates a random string with a length between `min` and `max`

```typescript
  const string = randomString(5, 10)
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `min` | `number` |
| `max` | `number` |

#### Returns

`string`

#### Defined in

[data-utilties.ts:35](https://github.com/MakerXStudio/ts-object-mother/blob/037055a/src/data-utilties.ts#L35)

___

### resetIncrementedNumbers

▸ **resetIncrementedNumbers**(): `void`

#### Returns

`void`

#### Defined in

[data-utilties.ts:81](https://github.com/MakerXStudio/ts-object-mother/blob/037055a/src/data-utilties.ts#L81)
