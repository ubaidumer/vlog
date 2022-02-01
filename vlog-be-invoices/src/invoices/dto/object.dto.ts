import {
    Field,
    ObjectType,
    Int,
    InputType,
    Extensions,
    OmitType,
    InputTypeOptions,
    registerEnumType,
  } from '@nestjs/graphql';  
  @ObjectType()
  class Neighbourhood{
    @Field({nullable:true})
    title: string;
    @Field({nullable:true})
    description: string;
    @Field({nullable:true})
    imageBlobId :string;
    @Field({nullable:true})
    videoBlobId :string;
    @Field({nullable:true})
    status :Boolean;
    @Field({nullable:true})
    latitude: Number;
    @Field({nullable:true})
    longitude: Number;
  }
  @ObjectType()
  class Garage{
    @Field({nullable:true})
    garageKind: string;
    @Field({nullable:true})
    garageSurface: string;
    @Field({nullable:true})
    garageSpace: number;
  }
  @ObjectType()
  class Details{
    @Field({nullable:true})
    neighbourhoodDescription: String;  //
    @Field({nullable:true})
    propertyType:String;//
    @Field()
    minNumberResidents: Number;//
    @Field()
    maxNumberResidents: Number;//
    @Field()
    constructionYear:String;//
    @Field()
    totalFloors: Number;//
    @Field()
    houseFloorNumber: Number;//
    @Field()
    totalRooms: Number;//
    @Field()
    totalBedrooms: Number;//
    @Field()
    livingSpace: Number;//
    @Field()
    surfaceOutside: Number;//
    @Field()
    totalToilets: Number;//
    @Field()
    propertyContent: String;//
    @Field({nullable:true})
    isFurnished: Boolean;//
    @Field()
    adaptedHouse: String;//
    @Field({nullable:true})
    adaptedForDisabled: Boolean;//
    @Field({nullable:true})
    adaptedForElders: Boolean;//
    @Field()
    energyLabel: String;//
    @Field({nullable:true})
    hasSharedLift: Boolean;//
    @Field()
    rentPerMonth: Number;//*
    @Field()
    heating: String;//
    @Field({nullable:true})
    hasWarmWater: Boolean;//
    @Field({nullable:true})
    facilityNo: Number;//
    @Field(()=>[String],{nullable:true,})
    amenities:[string];//*
    @Field(()=>Garage,{nullable:true,})
    garage:Garage;
    @Field(()=>[Neighbourhood],{nullable:true,})
    neighbourhood:Neighbourhood[];


  }
  
  @ObjectType()
  class MediaAdditionalVideo{
    @Field({nullable:true})
    blobIdTeaser:String;
    @Field({nullable:true})
    blobIdVideo:String;
    @Field({nullable:true})
    videoTitle:String;
    @Field({nullable:true})
    teaserTitle:String;
  }
  @ObjectType()
  class MediaImage{
    @Field({nullable:true})
    blobIdImage:String;
    @Field({nullable:true})
    title:String;
  }
  @ObjectType()
  class MediaVideo{
    @Field({nullable:true})
    blobIdTeaser:String;
    @Field({nullable:true})
    blobIdVideo:String;
  @Field({nullable:true})
    videoTitle:String;
    @Field({nullable:true})
    teaserTitle:String;
  }
  @ObjectType()
  class Address{
    @Field()
    city:String;
    @Field({nullable:true})
    area:String;
    @Field()
    streetNo:String;
    @Field()
    houseNo:String;
    @Field({nullable:true})
    additionalHouseNo:String;
    @Field()
    postCode:String;
    @Field({nullable:true})
    province:String;
  }
  
  @ObjectType()
  class ObjectDto{
    @Field()
    _id:String
    @Field()
    title:String;
    @Field(()=>Address)
    address:Address
    @Field({nullable:true})
    houseId:String;
    @Field()
    shortDescription:String;
    @Field()
    longDescription:String;
    @Field({nullable:true})
    availability:String;
    @Field({nullable:true})
    areaSize:Number;
    @Field({nullable:true})
    ownerId:String
    
    @Field(()=>Int,{nullable:true})
    vlogView: number;

    @Field(()=>Int,{nullable:true})
    vlogPurchase: number;

    @Field({nullable:true})
    isReviewed:Boolean;
    @Field({nullable:true})
    isPublished:Boolean;
    @Field({nullable:true})
    isFeatured:Boolean;
    @Field({nullable:true})
    createdAt:Date;
    @Field({nullable:true})
    updatedAt:Date;
    @Field({nullable:true})
    createdById:String;
    @Field({nullable:true})
    updatedById:String;
    @Field({nullable:true})
    createdBy:String;
    @Field({nullable:true})
    updatedBy:String;
    @Field(()=>MediaVideo,{nullable:true,})
    mediaVideo:MediaVideo;
    @Field(()=>[MediaImage],{nullable:true,})
    mediaImage:MediaImage[];
    @Field(()=>[MediaAdditionalVideo],{nullable:true,})
    mediaAdditionalVideo:MediaAdditionalVideo[];
    @Field(()=>Details)
    details:Details
  }

  
@ObjectType()
class DataAndPaginationDTO {
    @Field(type=>[ObjectDto])
    data:ObjectDto[];
    
    @Field(type=>Int, {nullable:true})
    totalCount?: number = 0;
}

export {
  ObjectDto,
  DataAndPaginationDTO,
}