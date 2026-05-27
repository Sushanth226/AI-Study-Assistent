const Pdf=require("../models/pdf");
const cloudinary=require("../dataBase/cloudinary");
const streamifier = require("streamifier");

const streamUpload = (filename, buffer) => {

    return new Promise((resolve, reject) => {

        const stream =
            cloudinary.uploader.upload_stream(

                {
                    resource_type: "raw",
                    folder: "pdfs",
                    public_id: `${Date.now()}-${filename}`
                },

                (error, result) => {

                    if (result) {

                        resolve(result);

                    } else {

                        reject(error);

                    }

                }
            );

        streamifier
            .createReadStream(buffer)
            .pipe(stream);

    });

};

const uploadPdf = async (req, res) => {

    try {

        const result =
            await streamUpload(req.file.originalname, req.file.buffer);

        const pdf =
            await Pdf.create({

                title: req.body.title,

                originalName:
                    req.file.originalname,

                pdfUrl:
                    result.secure_url,

                publicId:
                    result.public_id,

                fileSize:
                    req.file.size

            });

        res.status(201).json({

            success: true,

            pdf

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

const getAllPdfs = async (req, res) => {

    try {

        const pdfs = await Pdf.find();

        res.json(pdfs);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

const deletePdf = async (req, res) => {

    try {

        const pdf =
            await Pdf.findById(req.params.id);

        if (!pdf) {

            return res.status(404).json({
                message: "PDF not found"
            });

        }

        await cloudinary.uploader.destroy(

            pdf.publicId,

            {
                resource_type: "raw"
            }

        );

        await Pdf.findByIdAndDelete(req.params.id);

        res.json({
            message: "PDF deleted"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

module.exports = {

    uploadPdf,

    getAllPdfs,

    deletePdf

};