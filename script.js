render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <Dropdown
          loading={this.props.loading} 
          onSearchChange={this.props.onChange} 
          onChange={this.handleDropdownChange} 
          placeholder={this.props.label} 
          search selection 
        />
        <Button icon>
          <Icon name='search'/> 