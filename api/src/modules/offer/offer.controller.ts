import { Controller, Get, Inject } from '@nestjs/common';
import { ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { OfferService } from './offer.service';
import { GetAllOffersOutDto } from './offer.dto';

@Controller('/offer')
export class OfferController {
  constructor(@Inject() private readonly offerService: OfferService) {}

  @Get()
  @ApiOperation({ description: 'Retrieves active offers' })
  @ApiOkResponse({
    description: 'Returns all active offers',
    type: GetAllOffersOutDto,
  })
  getAllActive(): Promise<GetAllOffersOutDto> {
    return this.offerService.getAllActive();
  }
}
