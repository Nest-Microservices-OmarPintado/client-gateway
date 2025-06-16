import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';


@Controller('products')
export class ProductsController {
  constructor() {}

  @Post()
  createProduct(){
    return 'Product Create';
  }

  @Get()
  findAllProducts(){
    return 'Product List';
  }

  @Get(':id')
  findOneProduct(@Param('id') id: number){
    return `Product Details ${id}`;
  }

  @Delete(':id')
  removeProduct(@Param('id') id: number){
    return `Product Delete ${id}`;
  }

  @Patch(':id')
  updateProduct(@Param('id') id: number, @Body() any){
    return `Product Update ${id}`;
  }

}
