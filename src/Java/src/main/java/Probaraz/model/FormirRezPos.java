package Probaraz.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Probaraz.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: ФормирРезПос
 */
@Entity(name = "IISProbarazФормирРезПос")
@Table(schema = "public", name = "ФормирРезПос")
public class FormirRezPos {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Дата")
    private Date дата;

    @Column(name = "СтатусЗаказа")
    private String статусзаказа;

    @Column(name = "НаличДеф")
    private Boolean наличдеф;

    @Column(name = "УдовлКлиента")
    private String удовлклиента;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "FormirRaspr")
    @Convert("FormirRaspr")
    @Column(name = "ФормирРаспр", length = 16, unique = true, nullable = false)
    private UUID _formirrasprid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "FormirRaspr", insertable = false, updatable = false)
    private FormirRaspr formirraspr;


    public FormirRezPos() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Date getДата() {
      return дата;
    }

    public void setДата(Date дата) {
      this.дата = дата;
    }

    public String getСтатусЗаказа() {
      return статусзаказа;
    }

    public void setСтатусЗаказа(String статусзаказа) {
      this.статусзаказа = статусзаказа;
    }

    public Boolean getНаличДеф() {
      return наличдеф;
    }

    public void setНаличДеф(Boolean наличдеф) {
      this.наличдеф = наличдеф;
    }

    public String getУдовлКлиента() {
      return удовлклиента;
    }

    public void setУдовлКлиента(String удовлклиента) {
      this.удовлклиента = удовлклиента;
    }


}