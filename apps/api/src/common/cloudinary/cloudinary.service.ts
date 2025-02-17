import { Injectable } from '@nestjs/common'
import * as cloudinary from 'cloudinary'
import { Readable } from 'stream'

@Injectable()
export class CloudinaryService {
  constructor() {
    cloudinary.v2.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    })
  }

  async uploadBuffer(buffer: Buffer, publicId: string, folder = 'qrcodes') {
    return new Promise((resolve, reject) => {
      const uploadStream = cloudinary.v2.uploader.upload_stream(
        {
          folder,
          public_id: publicId,
          resource_type: 'image',
        },
        (error, result) => {
          if (error) {
            reject(error)
          } else {
            resolve(result.secure_url)
          }
        },
      )

      const stream = new Readable()
      stream.push(buffer)
      stream.push(null)
      stream.pipe(uploadStream)
    })
  }
}
