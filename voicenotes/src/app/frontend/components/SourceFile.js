import React from "react";
import { X } from 'lucide-react';

export default function SourceFile(file) {
    //filepreview is like a few lines of text from the file

    return (
        <div className="space-y-4">
            <div className="bg-white rounded-lg shadow p-4">
                <h3 className="font-semibold">{fileDetails.filename}</h3>
                <p className="text-sm text-gray-500">Parsed Text:<br />{fileDetails.filepreview}</p>
            </div>
        </div>
    )

}