# Class: DataBuilder<T\>

[data-builder](../modules/data_builder.md).DataBuilder

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Constructors

- [constructor](data_builder.DataBuilder.md#constructor)

### Properties

- [thing](data_builder.DataBuilder.md#thing)

### Methods

- [build](data_builder.DataBuilder.md#build)
- [clone](data_builder.DataBuilder.md#clone)
- [updateThing](data_builder.DataBuilder.md#updatething)
- [with](data_builder.DataBuilder.md#with)

## Constructors

### constructor

• `Protected` **new DataBuilder**<`T`\>(`thing`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `thing` | `T` |

#### Defined in

[data-builder.ts:25](https://github.com/MakerXStudio/ts-object-mother/blob/037055a/src/data-builder.ts#L25)

## Properties

### thing

• `Protected` **thing**: `T`

## Methods

### build

▸ **build**(): `T`

#### Returns

`T`

#### Defined in

[data-builder.ts:38](https://github.com/MakerXStudio/ts-object-mother/blob/037055a/src/data-builder.ts#L38)

___

### clone

▸ **clone**(): [`DataBuilder`](data_builder.DataBuilder.md)<`T`\>

#### Returns

[`DataBuilder`](data_builder.DataBuilder.md)<`T`\>

#### Defined in

[data-builder.ts:42](https://github.com/MakerXStudio/ts-object-mother/blob/037055a/src/data-builder.ts#L42)

___

### updateThing

▸ `Protected` **updateThing**<`K`\>(`key`, `value`): [`DataBuilder`](data_builder.DataBuilder.md)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |
| `value` | `T`[`K`] |

#### Returns

[`DataBuilder`](data_builder.DataBuilder.md)<`T`\>

#### Defined in

[data-builder.ts:29](https://github.com/MakerXStudio/ts-object-mother/blob/037055a/src/data-builder.ts#L29)

___

### with

▸ **with**<`K`\>(`key`, `value`): [`DataBuilder`](data_builder.DataBuilder.md)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |
| `value` | `T`[`K`] |

#### Returns

[`DataBuilder`](data_builder.DataBuilder.md)<`T`\>

#### Defined in

[data-builder.ts:34](https://github.com/MakerXStudio/ts-object-mother/blob/037055a/src/data-builder.ts#L34)
