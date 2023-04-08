import { PartialType } from '@nestjs/mapped-types';
import { CreateCajasPaneDto } from './create-cajas-pane.dto';

export class UpdateCajasPaneDto extends PartialType(CreateCajasPaneDto) {}
