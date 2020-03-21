<div class="row mb-5">
    <#list contentModel.columns_o.item as column>
      <div class="col-md-${contentModel.columns_o} mb-4">
          <#list column.content_o.item as component>
              <@renderComponent component=component />
          </#list>
      </div>
    </#list>
</div>
