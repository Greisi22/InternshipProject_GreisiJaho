package com.example.fooddeliveryy.Services;

import com.example.fooddeliveryy.Entities.Documentation;
import com.example.fooddeliveryy.Repositories.DocumentationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class DocumentationService {

    private final DocumentationRepository documentationRepository;

    @Autowired
    public  DocumentationService(DocumentationRepository  documentationRepository)
    {
        this.documentationRepository = documentationRepository;
    }

    public Documentation createDocumentation(Documentation documentation)
    {
        return documentationRepository.save(documentation);
    }

    public void deleteDocumentation(long documentationId) {

        documentationRepository.deleteById(documentationId);
    }

    public Optional<Documentation> getDocumentationById(long id) {
        return documentationRepository.findById(id);
    }
}
