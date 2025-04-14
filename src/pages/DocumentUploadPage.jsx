import React, { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const DocumentUploadPage = () => {
  const [documents, setDocuments] = useState([]);
  const [fileTitle, setFileTitle] = useState("");
  const [file, setFile] = useState(null);

  const handleUpload = () => {
    if (file && fileTitle) {
      const newDoc = {
        title: fileTitle,
        url: URL.createObjectURL(file),
        type: file.type,
      };
      setDocuments((prev) => [...prev, newDoc]);
      setFile(null);
      setFileTitle("");
    }
  };

  return (
    <div
      className="min-h-screen p-6 bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/documents-bg.jpg')" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-6 text-center">
          Upload Medical Documents
        </h1>

        <div className="bg-white p-6 rounded-xl shadow-xl text-black mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <Input
              placeholder="Document Title"
              value={fileTitle}
              onChange={(e) => setFileTitle(e.target.value)}
            />
            <Input
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
            />
            <Button onClick={handleUpload}>Upload</Button>
          </div>
          <p className="text-sm text-gray-500">
            Supported formats: PDF, JPG, PNG
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {documents.length === 0 && (
            <p className="text-gray-300 text-center col-span-full">
              No documents uploaded yet.
            </p>
          )}

          {documents.map((doc, index) => (
            <Card key={index} className="p-4 bg-white text-black rounded-xl">
              <h2 className="font-semibold mb-2">{doc.title}</h2>
              {doc.type.startsWith("image/") ? (
                <img src={doc.url} alt={doc.title} className="rounded-lg" />
              ) : doc.type === "application/pdf" ? (
                <iframe
                  src={doc.url}
                  className="w-full h-64 border rounded-lg"
                  title={doc.title}
                ></iframe>
              ) : (
                <p className="text-sm text-gray-500">Unsupported file type</p>
              )}
            </Card>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default DocumentUploadPage;