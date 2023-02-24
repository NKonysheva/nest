import { Body, Query, Controller, Put, Patch, Headers } from '@nestjs/common';
import { CalcParams } from './calc.params';
import { CalcService } from './calc.service';

@Controller('calc')
export class CalcController {
  constructor(private readonly calcService: CalcService) {}

  @Put()
  calculatePut(
    @Body() params: CalcParams,
    @Headers('Type-Operation') op: string,
  ): number {
    return this.calcService.calc(params.arg1, params.arg2, op);
  }

  @Patch()
  calculatePatch(
    @Query() params: CalcParams,
    @Headers('Type-Operation') op: string,
  ): number {
    return this.calcService.calc(params.arg1, params.arg2, op);
  }
}
